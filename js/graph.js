const blockColors = {
    'Álgebra Elemental': '#D85A30',
    'Álgebra Lineal': '#7F77DD',
    'Geometría Analítica': '#1D9E75',
    'Análisis Matemático': '#378ADD',
    'Estadística y Probabilidad': '#BA7517'
};

const blockCenters = {
    'Álgebra Elemental': { x: 0.2, y: 0.5 },
    'Álgebra Lineal': { x: 0.4, y: 0.3 },
    'Geometría Analítica': { x: 0.5, y: 0.7 },
    'Análisis Matemático': { x: 0.7, y: 0.4 },
    'Estadística y Probabilidad': { x: 0.8, y: 0.7 }
};

let nodes = [];
let links = [];
let nodeDepths = {};
let maxDepth = 0;

const unlockedNodes = new Set();
const completedNodes = new Set();

const STORAGE_KEY_UNLOCKED = 'matesforme_unlocked';
const STORAGE_KEY_COMPLETED = 'matesforme_completed';

function loadProgress() {
    try {
        const savedUnlocked = localStorage.getItem(STORAGE_KEY_UNLOCKED);
        const savedCompleted = localStorage.getItem(STORAGE_KEY_COMPLETED);
        
        if (savedUnlocked) {
            JSON.parse(savedUnlocked).forEach(id => unlockedNodes.add(id));
        }
        if (savedCompleted) {
            JSON.parse(savedCompleted).forEach(id => completedNodes.add(id));
        }
    } catch (e) {
        console.log('Could not load progress from localStorage');
    }
}

function saveProgress() {
    try {
        localStorage.setItem(STORAGE_KEY_UNLOCKED, JSON.stringify([...unlockedNodes]));
        localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify([...completedNodes]));
    } catch (e) {
        console.log('Could not save progress to localStorage');
    }
}

function clearProgress() {
    unlockedNodes.clear();
    completedNodes.clear();
    nodes.filter(n => isEntryNode(n)).forEach(n => unlockedNodes.add(n.id));
    localStorage.removeItem(STORAGE_KEY_UNLOCKED);
    localStorage.removeItem(STORAGE_KEY_COMPLETED);
    saveProgress();
}

window.clearProgress = clearProgress;

function calculateNodeDepths() {
    nodeDepths = {};
    const nodeMap = new Map(nodes.map(n => [n.id, n]));
    
    function getDepth(nodeId, visited = new Set()) {
        if (nodeDepths[nodeId] !== undefined) return nodeDepths[nodeId];
        if (visited.has(nodeId)) return 0;
        visited.add(nodeId);
        
        const node = nodeMap.get(nodeId);
        if (!node || node.prereqs.length === 0) {
            nodeDepths[nodeId] = 0;
            return 0;
        }
        
        let maxPrereqDepth = 0;
        node.prereqs.forEach(prereqId => {
            maxPrereqDepth = Math.max(maxPrereqDepth, getDepth(prereqId, visited) + 1);
        });
        
        nodeDepths[nodeId] = maxPrereqDepth;
        return maxPrereqDepth;
    }
    
    nodes.forEach(node => getDepth(node.id));
    maxDepth = Math.max(...Object.values(nodeDepths));
}

function getCrossBlockConnections(node) {
    let crossBlockCount = 0;
    
    node.prereqs.forEach(prereqId => {
        const prereq = nodes.find(n => n.id === prereqId);
        if (prereq && prereq.block !== node.block) crossBlockCount++;
    });
    
    node.unlocks.forEach(unlockId => {
        const unlock = nodes.find(n => n.id === unlockId);
        if (unlock && unlock.block !== node.block) crossBlockCount++;
    });
    
    return crossBlockCount;
}

function getInitialPosition(node) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const margin = { top: 80, bottom: 80, left: 100, right: 100 };
    const graphWidth = width - margin.left - margin.right;
    const graphHeight = height - margin.top - margin.bottom;
    
    const baseX = margin.left + blockCenters[node.block].x * graphWidth;
    const baseY = margin.top + (nodeDepths[node.id] / maxDepth) * graphHeight;
    
    const blockNodes = nodes.filter(n => n.block === node.block);
    const sameDepthNodes = blockNodes.filter(n => nodeDepths[n.id] === nodeDepths[node.id]);
    const indexInGroup = sameDepthNodes.indexOf(node);
    const groupSize = sameDepthNodes.length;
    
    const spread = Math.min(150, graphWidth * 0.15 / Math.max(1, Math.sqrt(groupSize)));
    const offsetX = (indexInGroup - (groupSize - 1) / 2) * spread;
    
    const targetBlock = blockCenters[node.block];
    let mixFactor = 0;
    
    node.prereqs.forEach(prereqId => {
        const prereq = nodes.find(n => n.id === prereqId);
        if (prereq && prereq.block !== node.block) {
            mixFactor += (blockCenters[prereq.block].x - targetBlock.x) * 0.2;
        }
    });
    
    return {
        x: baseX + offsetX + mixFactor + (Math.random() - 0.5) * 30,
        y: baseY + (Math.random() - 0.5) * 20
    };
}

function isEntryNode(node) {
    return node.prereqs.length === 0;
}

function isNodeUnlocked(nodeId) {
    return unlockedNodes.has(nodeId);
}

function isNodeCompleted(nodeId) {
    return completedNodes.has(nodeId);
}

function getNodeColor(node, isUnlocked) {
    const baseColor = blockColors[node.block];
    if (isUnlocked) return baseColor;
    return d3.color(baseColor).copy({ opacity: 0.35 });
}

function updateNodeColors() {
    node.select('circle')
        .attr('fill', d => getNodeColor(d, isNodeUnlocked(d.id)))
        .attr('opacity', d => isNodeUnlocked(d.id) ? 1 : 0.5)
        .attr('stroke', d => {
            if (isNodeCompleted(d.id)) return '#ffd700';
            return d3.color(blockColors[d.block]).copy({ opacity: 0.5 });
        })
        .attr('stroke-width', d => isNodeCompleted(d.id) ? 3 : 1);
}

function updateStats() {
    document.getElementById('totalNodes').textContent = `${unlockedNodes.size}/${nodes.length} nodos desbloqueados`;
}

let svg, g, simulation, link, node, zoom;

function initGraph() {
    svg = d3.select('#graph');
    const width = window.innerWidth;
    const height = window.innerHeight;

    svg.attr('width', width).attr('height', height);

    g = svg.append('g');

    zoom = d3.zoom()
        .scaleExtent([0.1, 3])
        .on('zoom', (event) => {
            g.attr('transform', event.transform);
        });

    svg.call(zoom);

    simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(60).strength(0.3))
        .force('charge', d3.forceManyBody().strength(-150))
        .force('collision', d3.forceCollide().radius(30))
        .force('x', d3.forceX(d => {
            const center = blockCenters[d.block];
            return center.x * width;
        }).strength(0.15))
        .force('y', d3.forceY(d => {
            const margin = 100;
            const graphHeight = height - 2 * margin;
            return margin + (nodeDepths[d.id] / maxDepth) * graphHeight;
        }).strength(0.2))
        .alphaDecay(0.02)
        .velocityDecay(0.4);

    link = g.append('g')
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('class', 'link');

    node = g.append('g')
        .selectAll('g')
        .data(nodes)
        .join('g')
        .attr('class', d => `node ${isNodeUnlocked(d.id) ? '' : 'locked'}`)
        .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended));

    node.append('circle')
        .attr('r', 16)
        .attr('fill', d => getNodeColor(d, isNodeUnlocked(d.id)))
        .attr('opacity', d => isNodeUnlocked(d.id) ? 1 : 0.5)
        .attr('stroke', d => d3.color(blockColors[d.block]).copy({ opacity: 0.5 }))
        .attr('stroke-width', 1);

    node.append('text')
        .attr('dy', 28)
        .text(d => d.id);

    const tooltip = document.getElementById('tooltip');

    node.on('mouseover', function(event, d) {
        d3.select(this).select('circle').attr('r', 20);
        d3.select(this).select('circle').attr('opacity', 1);
        d3.select(this).select('circle').attr('fill', blockColors[d.block]);
        
        let strokeColor = '#fff';
        let strokeWidth = 2;
        if (isNodeCompleted(d.id)) {
            strokeColor = '#ffd700';
            strokeWidth = 3;
        }
        d3.select(this).select('circle').attr('stroke', strokeColor);
        d3.select(this).select('circle').attr('stroke-width', strokeWidth);
        
        tooltip.querySelector('.id').textContent = d.id;
        tooltip.querySelector('h3').textContent = d.name;
        tooltip.querySelector('.block').textContent = d.block;
        tooltip.querySelector('.block').style.backgroundColor = blockColors[d.block];
        tooltip.querySelector('.description').textContent = d.description;
        tooltip.querySelector('.prereq span').textContent = d.prereqs.length > 0 ? d.prereqs.join(', ') : 'Ninguno';
        tooltip.querySelector('.unlocks span').textContent = d.unlocks.length > 0 ? d.unlocks.join(', ') : 'Ninguno (terminal)';
        
        let status = '';
        if (isNodeCompleted(d.id)) {
            status = '[Completado]';
        } else if (isNodeUnlocked(d.id)) {
            status = '[Desbloqueado]';
        } else {
            status = '[Bloqueado]';
        }
        
        const prereqsLocked = d.prereqs.filter(p => !isNodeUnlocked(p));
        let statusText = status;
        if (prereqsLocked.length > 0 && !isNodeUnlocked(d.id)) {
            statusText += ` (requiere: ${prereqsLocked.join(', ')})`;
        }
        tooltip.querySelector('.status').textContent = statusText;
        tooltip.querySelector('.status').style.color = isNodeCompleted(d.id) ? '#ffd700' : (isNodeUnlocked(d.id) ? '#4ecdc4' : '#ff6b6b');
        tooltip.querySelector('.status').style.fontWeight = 'bold';
        tooltip.querySelector('.status').style.marginBottom = '6px';
        
        tooltip.classList.add('visible');
        
        const connectedNodes = new Set();
        connectedNodes.add(d.id);
        d.prereqs.forEach(p => connectedNodes.add(p));
        d.unlocks.forEach(u => connectedNodes.add(u));
        
        node.classed('dimmed', n => !connectedNodes.has(n.id));
        link.classed('dimmed', l => l.source.id !== d.id && l.target.id !== d.id)
            .classed('highlighted', l => l.source.id === d.id || l.target.id === d.id);
    })
    .on('mousemove', function(event) {
        tooltip.style.left = (event.pageX + 15) + 'px';
        tooltip.style.top = (event.pageY + 15) + 'px';
    })
    .on('mouseout', function(event, d) {
        d3.select(this).select('circle').attr('r', 16);
        d3.select(this).select('circle').attr('opacity', isNodeUnlocked(d.id) ? 1 : 0.5);
        d3.select(this).select('circle').attr('fill', getNodeColor(d, isNodeUnlocked(d.id)));
        
        let strokeColor = d3.color(blockColors[d.block]).copy({ opacity: 0.5 });
        let strokeWidth = 1;
        if (isNodeCompleted(d.id)) {
            strokeColor = '#ffd700';
            strokeWidth = 3;
        }
        d3.select(this).select('circle').attr('stroke', strokeColor);
        d3.select(this).select('circle').attr('stroke-width', strokeWidth);
        
        tooltip.classList.remove('visible');
        node.classed('dimmed', false);
        link.classed('dimmed', false).classed('highlighted', false);
    })
    .on('click', function(event, d) {
        if (!isNodeUnlocked(d.id)) {
            const allPrereqsUnlocked = d.prereqs.every(prereq => isNodeUnlocked(prereq));
            if (allPrereqsUnlocked) {
                unlockNode(d.id);
                d3.select(this).classed('locked', false);
                updateStats();
            }
        }
        
        if (typeof window.openModal === 'function') {
            window.openModal(d);
        }
    });

    simulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        node.attr('transform', d => `translate(${d.x},${d.y})`);
    });
}

function unlockNode(nodeId) {
    if (!unlockedNodes.has(nodeId)) {
        unlockedNodes.add(nodeId);
        updateNodeColors();
    }
}

function markNodeCompleted(nodeId) {
    if (!completedNodes.has(nodeId)) {
        completedNodes.add(nodeId);
        updateNodeColors();
        
        const nodeData = nodes.find(n => n.id === nodeId);
        if (nodeData) {
            nodeData.unlocks.forEach(unlockId => {
                unlockNode(unlockId);
                const unlockNodeElement = node.filter(d => d.id === unlockId);
                unlockNodeElement.classed('locked', false);
            });
        }
        updateStats();
        saveProgress();
    }
}

window.markNodeCompleted = markNodeCompleted;

function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
}

function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
}

function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
}

function setupControls() {
    const legend = document.getElementById('legend');
    Object.entries(blockColors).forEach(([block, color]) => {
        const item = document.createElement('div');
        item.className = 'legend-item';
        item.innerHTML = `<div class="legend-color" style="background-color: ${color}"></div>${block}`;
        legend.appendChild(item);
    });

    updateStats();
    document.getElementById('totalLinks').textContent = links.length;

    document.getElementById('zoomIn').addEventListener('click', () => {
        svg.transition().duration(300).call(zoom.scaleBy, 1.4);
    });

    document.getElementById('zoomOut').addEventListener('click', () => {
        svg.transition().duration(300).call(zoom.scaleBy, 0.7);
    });

    document.getElementById('reset').addEventListener('click', () => {
        svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity);
    });

    let labelsVisible = true;
    document.getElementById('toggleLabels').addEventListener('click', () => {
        labelsVisible = !labelsVisible;
        node.select('text').style('opacity', labelsVisible ? 1 : 0);
    });

    document.getElementById('resetProgress').addEventListener('click', () => {
        clearProgress();
        updateNodeColors();
        node.classed('locked', d => !isNodeUnlocked(d.id));
        updateStats();
    });

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        
        if (query === '') {
            node.classed('dimmed', false);
            link.classed('dimmed', false);
            return;
        }
        
        const matchingNodes = nodes.filter(n => 
            n.id.toLowerCase().includes(query) || 
            n.name.toLowerCase().includes(query)
        );
        
        const matchingIds = new Set(matchingNodes.map(n => n.id));
        
        node.classed('dimmed', d => !matchingIds.has(d.id));
        link.classed('dimmed', l => 
            !matchingIds.has(l.source.id) && !matchingIds.has(l.target.id)
        );
    });

    window.addEventListener('resize', () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        svg.attr('width', newWidth).attr('height', newHeight);
        simulation.force('center', d3.forceCenter(newWidth / 2, newHeight / 2));
        simulation.alpha(0.3).restart();
    });
}

async function loadData() {
    try {
        const response = await fetch('data/nodes.json');
        if (!response.ok) throw new Error('Error loading nodes');
        
        nodes = await response.json();
        
        links = [];
        nodes.forEach(node => {
            node.prereqs.forEach(prereqId => {
                links.push({ source: prereqId, target: node.id });
            });
        });
        
        nodes.forEach(node => {
            const pos = getInitialPosition(node);
            node.x = pos.x;
            node.y = pos.y;
            node.fx = null;
            node.fy = null;
        });
        
        nodes.filter(n => isEntryNode(n)).forEach(n => unlockedNodes.add(n.id));
        
        loadProgress();
        
        calculateNodeDepths();
        
        return true;
    } catch (error) {
        console.error('Error loading data:', error);
        return false;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    blockColorsModal = blockColors;
    
    const loaded = await loadData();
    if (loaded) {
        initGraph();
        setupControls();
    } else {
        document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;color:#fff;">Error al cargar los datos. Asegúrate de usar un servidor local.</div>';
    }
});
