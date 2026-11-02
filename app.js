
const projects = {
  maha: {
    category: 'AI & end-to-end development',
    title: 'Mahakhanij FAQ Chatbot',
    description:
      'Worked on the complete multilingual FAQ chatbot for the Maharashtra Mines & Geology portal, covering the frontend, backend, and database.',
    details: [
      'Frontend: developed the floating React and TypeScript chat widget, including English, Hindi, and Marathi selection, conversation history, and message feedback.',
      'Backend: implemented FastAPI endpoints for chat sessions, messages, language selection, history, and feedback.',
      'Database: worked on SQL Server integration and data handling for the chatbot.',
      'AI & retrieval: integrated FAQ retrieval into the application to help users find relevant answers.',
    ],
    stack: 'React · TypeScript · FastAPI · SQL Server',
  },
  vision: {
    category: 'AI & computer vision',
    title: 'Intel Image Classification',
    description:
      'An image-classification web application connecting a TensorFlow/Keras model to a browser interface and FastAPI backend.',
    details: [
      'Classifies images into six scene categories: buildings, forest, glacier, mountain, sea, and street.',
      'Supports image upload, preview, and a predicted category with a confidence score.',
      'Packages the application with Docker; the repository includes the saved model and sample images.',
    ],
    stack: 'TensorFlow · Keras · FastAPI · JavaScript · Docker',
    source: 'https://github.com/Sido-dev/intel-image-classification-fastapi',
  },
  loan: {
    category: 'Machine learning',
    title: 'Loan Default Prediction',
    description:
      'A supervised learning project exploring loan default prediction with CatBoost.',
    details: [
      'Developed a CatBoost classification workflow with preprocessing, feature engineering, and hyperparameter tuning.',
      'The repository includes a saved CatBoost model, categorical-feature metadata, and a decision-threshold artifact.',
      'Explored decision-threshold tuning, feature importance, and SHAP explainability to interpret default predictions.',
    ],
    stack: 'Python · CatBoost · Jupyter Notebook',
    source:
      'https://github.com/Sido-dev/Data-Science-Projects/tree/main/CatBoost/Loan_Default_Prediction',
  },
  customer: {
    category: 'Data & customer analytics',
    title: 'RFM Customer Analysis',
    description:
      'A customer analytics project using recency, frequency, and monetary value to explore customer segments.',
    details: [
      'Combines monthly sales data in BigQuery and calculates customer-level RFM metrics with SQL.',
      'Includes monthly datasets and a Power BI dashboard file.',
      'Uses window functions and decile scores to group customers into segments such as loyal, high-value, and at-risk customers.',
    ],
    stack: 'SQL · Power BI · RFM Analysis',
    source:
      'https://github.com/Sido-dev/Data-Analytics-Projects/tree/main/rfm-analysis',
  },
  insurance: {
    category: 'Data & business intelligence',
    title: 'Vehicle Insurance Analysis',
    description:
      'An exploratory data analysis and dashboard project focused on vehicle insurance data.',
    details: [
      'Explores the dataset in a Python EDA notebook.',
      'Presents analysis in a Power BI dashboard.',
      'The repository includes the notebook, dashboard file, and supporting data.',
    ],
    stack: 'Python · Pandas · Power BI · EDA',
    source:
      'https://github.com/Sido-dev/Data-Analytics-Projects/tree/main/vehicle-insurance-analysis',
  },
  moodify: {
    category: 'Software & research',
    title: 'Moodify Travel',
    description:
      'A travel website concept that connects sentiment with destination discovery and trip planning.',
    details: [
      'Develop a MERN application for mood-based destination suggestions.',
      'Combine itinerary planning with weather information and travel to-do features.',
      'Document the project in “Moodify: Mood Base Traveling Website,” published in IJRAR, Volume 11, Issue 4, October 2024.',
    ],
    stack: 'MongoDB · Express · React · Node.js · Sentiment analysis',
    source: 'https://github.com/Sido-dev/Moodify-Travel',
  },
};

const filterButtons = document.querySelectorAll('[data-filter]');
const projectCards = document.querySelectorAll('.project');

/** Apply the selected category to the project grid. */
function applyProjectFilter(selectedFilter) {
  projectCards.forEach((card) => {
    const matchesFilter =
      selectedFilter === 'all' || card.dataset.category === selectedFilter;

    card.hidden = !matchesFilter;
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((filterButton) => {
      const isSelected = filterButton === button;

      filterButton.classList.toggle('active', isSelected);
      filterButton.setAttribute('aria-pressed', String(isSelected));
    });

    applyProjectFilter(button.dataset.filter);
  });
});

const projectDialog = document.querySelector('#project-dialog');
const dialogCategory = document.querySelector('#dialog-category');
const dialogTitle = document.querySelector('#dialog-title');
const dialogDescription = document.querySelector('#dialog-description');
const dialogDetails = document.querySelector('#dialog-details');
const dialogStack = document.querySelector('#dialog-stack');
const dialogSource = document.querySelector('#dialog-source');
const dialogCloseButton = document.querySelector('.close');

/** Fill the dialog with the selected project's information. */
function openProjectDialog(projectId) {
  const project = projects[projectId];

  if (!project || !projectDialog) {
    return;
  }

  dialogCategory.textContent = project.category;
  dialogTitle.textContent = project.title;
  dialogDescription.textContent = project.description;
  dialogStack.textContent = project.stack;

  // Build the list with textContent so project copy is never parsed as HTML.
  dialogDetails.replaceChildren(
    ...project.details.map((detail) => {
      const item = document.createElement('li');
      item.textContent = detail;
      return item;
    }),
  );

  dialogSource.hidden = !project.source;

  if (project.source) {
    dialogSource.href = project.source;
  } else {
    dialogSource.removeAttribute('href');
  }

  projectDialog.showModal();
}

document.querySelectorAll('[data-project]').forEach((projectButton) => {
  projectButton.addEventListener('click', () => {
    openProjectDialog(projectButton.dataset.project);
  });
});

dialogCloseButton?.addEventListener('click', () => {
  projectDialog.close();
});

// Clicking the dialog backdrop closes it; clicks inside the dialog do not.
projectDialog?.addEventListener('click', (event) => {
  if (event.target === projectDialog) {
    const dialogBounds = projectDialog.getBoundingClientRect();
    const clickIsOutsideDialog =
      event.clientX < dialogBounds.left ||
      event.clientX > dialogBounds.right ||
      event.clientY < dialogBounds.top ||
      event.clientY > dialogBounds.bottom;

    if (clickIsOutsideDialog) {
      projectDialog.close();
    }
  }
});
