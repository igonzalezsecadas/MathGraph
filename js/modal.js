let curriculumData = {};
let questionsData = {};
let currentNode = null;
let currentQuestions = [];
let expandedExercises = {};
let showSolutions = false;
let currentTab = 'theory';

let blockColorsModal = {};

async function loadModalData() {
    try {
        const [curriculumRes, questionsRes] = await Promise.all([
            fetch('data/curriculum.json'),
            fetch('data/questions.json')
        ]);
        
        if (curriculumRes.ok) {
            curriculumData = await curriculumRes.json();
        }
        
        if (questionsRes.ok) {
            questionsData = await questionsRes.json();
        }
    } catch (e) {
        console.log('Curriculum o preguntas no disponibles');
    }
}

function preprocessContent(text) {
    if (!text) return '';
    
    let processed = text;
    
    processed = processed.replace(/\\n/g, '\n');
    
    processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    processed = processed.replace(/^- (.+)$/gm, '<li>$1</li>');
    
    const listRegex = /(<li>[\s\S]*?<\/li>)(?=\n(?:(?!<li>)|$))/g;
    processed = processed.replace(listRegex, match => {
        return '<ul>' + match + '</ul>';
    });
    
    processed = processed.replace(/\n\n+/g, '</p><p>');
    processed = '<p>' + processed + '</p>';
    processed = processed.replace(/<p><\/p>/g, '');
    processed = processed.replace(/<p>(<ul>)/g, '$1');
    processed = processed.replace(/(<\/ul>)<\/p>/g, '$1');
    processed = processed.replace(/<p>(<strong>)/g, '$1');
    processed = processed.replace(/(<\/strong>)<\/p>/g, '$1');
    
    return processed;
}

function openModal(node) {
    currentNode = node;
    expandedExercises = {};
    showSolutions = false;
    currentTab = 'theory';
    
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalNodeId = document.getElementById('modal-node-id');
    const modalBlockBadge = document.getElementById('modal-block-badge');
    
    modalTitle.textContent = node.name;
    modalNodeId.textContent = node.id;
    modalBlockBadge.textContent = node.block;
    modalBlockBadge.style.backgroundColor = blockColorsModal[node.block] || '#888';
    
    updateTabButtons();
    renderCurrentTab();
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        MathJax.typesetPromise().catch(err => console.log('MathJax error:', err));
    }, 100);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentNode = null;
}

function switchTab(tab) {
    currentTab = tab;
    updateTabButtons();
    renderCurrentTab();
    setTimeout(() => {
        MathJax.typesetPromise().catch(err => console.log('MathJax error:', err));
    }, 100);
}

function updateTabButtons() {
    const btnTheory = document.getElementById('btn-tab-theory');
    const btnExercises = document.getElementById('btn-tab-exercises');
    
    btnTheory.classList.toggle('active', currentTab === 'theory');
    btnExercises.classList.toggle('active', currentTab === 'exercises');
}

function renderCurrentTab() {
    const theoryView = document.getElementById('theory-view');
    const exercisesView = document.getElementById('exercises-view');
    
    if (currentTab === 'theory') {
        theoryView.style.display = 'block';
        exercisesView.style.display = 'none';
        renderTheoryView();
    } else {
        theoryView.style.display = 'none';
        exercisesView.style.display = 'block';
        renderExercisesView();
    }
}

function renderTheoryView() {
    const theoryContent = document.getElementById('theory-content');
    const noCurriculum = document.getElementById('no-curriculum');
    
    const nodeCurriculum = curriculumData[currentNode.id];
    
    if (nodeCurriculum) {
        noCurriculum.style.display = 'none';
        theoryContent.style.display = 'block';
        
        let html = '';
        
        if (nodeCurriculum.descripcion) {
            html += `<div class="theory-description">${preprocessContent(nodeCurriculum.descripcion)}</div>`;
        }
        
        if (nodeCurriculum.contenidos && nodeCurriculum.contenidos.length > 0) {
            nodeCurriculum.contenidos.forEach((content, index) => {
                html += `
                    <div class="theory-section">
                        <h3 class="theory-section-title">
                            <span class="theory-icon"></span>
                            ${content.titulo}
                        </h3>
                        <div class="theory-section-body">
                            ${preprocessContent(content.cuerpo)}
                        </div>
                    </div>
                `;
            });
        }
        
        if (nodeCurriculum.objetivos && nodeCurriculum.objetivos.length > 0) {
            html += `
                <div class="theory-section objectives-section">
                    <h3 class="theory-section-title">
                        <span class="theory-icon"></span>
                        Objetivos de aprendizaje
                    </h3>
                    <ul class="objectives-list">
                        ${nodeCurriculum.objetivos.map(obj => `<li>${preprocessContent(obj)}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        theoryContent.innerHTML = html;
    } else {
        noCurriculum.style.display = 'block';
        theoryContent.style.display = 'none';
    }
}

function renderExercisesView() {
    const exercisesContent = document.getElementById('exercises-content');
    const noQuestions = document.getElementById('no-questions');
    
    const nodeQuestions = questionsData[currentNode.id];
    
    if (nodeQuestions && nodeQuestions.ejercicios && nodeQuestions.ejercicios.length > 0) {
        noQuestions.style.display = 'none';
        exercisesContent.style.display = 'block';
        
        let html = `<div class="exercises-header">
            <p class="exercises-info">${nodeQuestions.total_ejercicios || nodeQuestions.ejercicios.length} ejercicios disponibles</p>
        </div>`;
        
        nodeQuestions.ejercicios.forEach((exercise, index) => {
            const isExpanded = expandedExercises[exercise.id] || false;
            const difficultyClass = exercise.dificultad || 'basica';
            
            html += `
                <div class="exercise-card ${isExpanded ? 'expanded' : ''}">
                    <div class="exercise-header" onclick="toggleExercise('${exercise.id}')">
                        <div class="exercise-info">
                            <span class="exercise-id">${exercise.id}</span>
                            <span class="exercise-difficulty ${difficultyClass}">${getDifficultyLabel(exercise.dificultad)}</span>
                            <span class="exercise-type">${getTypeLabel(exercise.tipo)}</span>
                        </div>
                        <div class="exercise-preview">
                            <span class="exercise-preview-text">${truncateText(exercise.enunciado, 80)}</span>
                            <span class="exercise-toggle">${isExpanded ? '-' : '+'}</span>
                        </div>
                    </div>
                    ${isExpanded ? `
                        <div class="exercise-body">
                            <div class="exercise-enunciado">
                                ${preprocessContent(exercise.enunciado)}
                            </div>
                            <div class="exercise-solution">
                                <h4 class="solution-title">Solucion</h4>
                                <div class="solution-content">
                                    ${exercise.solucion.respuesta_directa ? `
                                        <div class="solution-direct">
                                            <strong>Respuesta:</strong> ${preprocessContent(exercise.solucion.respuesta_directa)}
                                        </div>
                                    ` : ''}
                                    ${exercise.solucion.desarrollo ? `
                                        <div class="solution-development">
                                            <strong>Desarrollo:</strong><br>
                                            ${preprocessContent(exercise.solucion.desarrollo)}
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    ` : ''}
                </div>
            `;
        });
        
        exercisesContent.innerHTML = html;
    } else {
        noQuestions.style.display = 'block';
        exercisesContent.style.display = 'none';
    }
}

function toggleExercise(exerciseId) {
    expandedExercises[exerciseId] = !expandedExercises[exerciseId];
    renderExercisesView();
    setTimeout(() => {
        MathJax.typesetPromise().catch(err => console.log('MathJax error:', err));
    }, 50);
}

function getDifficultyLabel(difficulty) {
    const labels = {
        'basica': 'Básica',
        'intermedia': 'Intermedia',
        'avanzada': 'Avanzada'
    };
    return labels[difficulty] || difficulty || 'Básica';
}

function getTypeLabel(type) {
    const labels = {
        'corto': 'Respuesta corta',
        'desarrollo': 'Desarrollo'
    };
    return labels[type] || type || '';
}

function truncateText(text, maxLength) {
    if (!text) return '';
    const clean = text.replace(/\$\$?[\s\S]*?\$\$?/g, '[expresión]').replace(/\n/g, ' ');
    if (clean.length > maxLength) {
        return clean.substring(0, maxLength) + '...';
    }
    return clean;
}

function completeNode() {
    if (typeof window.markNodeCompleted === 'function') {
        window.markNodeCompleted(currentNode.id);
    }
    closeModal();
}

function initModal() {
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('modal-close');
    const btnTabTheory = document.getElementById('btn-tab-theory');
    const btnTabExercises = document.getElementById('btn-tab-exercises');
    const btnCerrar = document.getElementById('btn-cerrar');
    const btnCompletar = document.getElementById('btn-completar');
    
    closeBtn.addEventListener('click', closeModal);
    btnCerrar.addEventListener('click', closeModal);
    btnTabTheory.addEventListener('click', () => switchTab('theory'));
    btnTabExercises.addEventListener('click', () => switchTab('exercises'));
    btnCompletar.addEventListener('click', completeNode);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    loadModalData();
}

window.toggleExercise = toggleExercise;
