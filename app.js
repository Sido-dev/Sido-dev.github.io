const projects = {
  sales: {
    category: 'Data & analytics',
    title: 'Enterprise Sales Analytics',
    description: 'A sales analytics project connecting SQL preparation, Python analysis, and an interactive Power BI dashboard.',
    details: [
      'Prepare and analyze sales records using SQL aggregations, CTEs, and window functions.',
      'Explore sales, profit, customer segments, and regional performance.',
      'Translate analysis into dashboard views that help compare products and business performance.'
    ],
    stack: 'SQL · Python · Power BI'
  },
  maha: {
    category: 'AI & end-to-end development',
    title: 'Mahakhanij FAQ Chatbot',
    description: 'Worked on the complete multilingual FAQ chatbot for the Maharashtra Mines & Geology portal, covering the frontend, backend, and database.',
    details: [
      'Frontend: developed the floating React and TypeScript chat widget, including English, Hindi, and Marathi selection, conversation history, and message feedback.',
      'Backend: implemented FastAPI endpoints for chat sessions, messages, language selection, history, and feedback.',
      'Database: worked on SQL Server integration and data handling for the chatbot.',
      'AI & retrieval: integrated FAQ retrieval into the application to help users find relevant answers.'
    ],
    stack: 'React · TypeScript · FastAPI · SQL Server'
  },
  customer: {
    category: 'Data & analytics',
    title: 'Customer Behavior Analytics',
    description: 'An e-commerce analysis project exploring the relationship between customer behavior and revenue.',
    details: [
      'Clean and explore transaction data with Python and SQL.',
      'Use recency, frequency, and monetary value to group customers through RFM analysis.',
      'Visualize revenue, retention, regional sales, and seasonal patterns in Power BI.'
    ],
    stack: 'Python · Pandas · SQL · Power BI · RFM'
  },
  moodify: {
    category: 'Software & research',
    title: 'Moodify Travel',
    description: 'A travel website concept that connects sentiment with destination discovery and trip planning.',
    details: [
      'Develop a MERN application for mood-based destination suggestions.',
      'Combine itinerary planning with weather information and travel to-do features.',
      'Document the project in “Moodify: Mood Base Traveling Website,” published in IJRAR, Volume 11, Issue 4, October 2024.'
    ],
    stack: 'MongoDB · Express · React · Node.js · Sentiment analysis'
  }
};

Object.assign(projects, {
  vision: {
    category: 'AI & computer vision',
    title: 'Intel Image Classification',
    description: 'An image-classification web application connecting a TensorFlow/Keras model to a browser interface and FastAPI backend.',
    details: [
      'Classifies images into six scene categories: buildings, forest, glacier, mountain, sea, and street.',
      'Supports image upload, preview, and a predicted category with a confidence score.',
      'Packages the application with Docker; the repository includes the saved model and sample images.'
    ],
    stack: 'TensorFlow · Keras · FastAPI · JavaScript · Docker',
    source: 'https://github.com/Sido-dev/intel-image-classification-fastapi'
  },
  loan: {
    category: 'Machine learning',
    title: 'Loan Default Prediction',
    description: 'A supervised learning project exploring loan default prediction with CatBoost.',
    details: [
      'Developed a CatBoost classification workflow with preprocessing, feature engineering, and hyperparameter tuning.',
      'The repository includes a saved CatBoost model, categorical-feature metadata, and a decision-threshold artifact.',
      'Explored decision-threshold tuning, feature importance, and SHAP explainability to interpret default predictions.'
    ],
    stack: 'Python · CatBoost · Jupyter Notebook',
    source: 'https://github.com/Sido-dev/Data-Science-Projects/tree/main/CatBoost/Loan_Default_Prediction'
  },
  customer: {
    category: 'Data & customer analytics',
    title: 'RFM Customer Analysis',
    description: 'A customer analytics project using recency, frequency, and monetary value to explore customer segments.',
    details: [
      'Combines monthly sales data in BigQuery and calculates customer-level RFM metrics with SQL.',
      'Includes monthly datasets and a Power BI dashboard file.',
      'Uses window functions and decile scores to group customers into segments such as loyal, high-value, and at-risk customers.'
    ],
    stack: 'SQL · Power BI · RFM Analysis',
    source: 'https://github.com/Sido-dev/Data-Analytics-Projects/tree/main/rfm-analysis'
  },
  insurance: {
    category: 'Data & business intelligence',
    title: 'Vehicle Insurance Analysis',
    description: 'An exploratory data analysis and dashboard project focused on vehicle insurance data.',
    details: [
      'Explores the dataset in a Python EDA notebook.',
      'Presents analysis in a Power BI dashboard.',
      'The repository includes the notebook, dashboard file, and supporting data.'
    ],
    stack: 'Python · Pandas · Power BI · EDA',
    source: 'https://github.com/Sido-dev/Data-Analytics-Projects/tree/main/vehicle-insurance-analysis'
  }
});

projects.moodify.source = 'https://github.com/Sido-dev/Moodify-Travel';

const filters = document.querySelectorAll('[data-filter]');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((b) => {
      b.classList.toggle('active', b === button);
      b.setAttribute('aria-pressed', String(b === button));
    });

    document.querySelectorAll('.project').forEach((card) => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    });
  });
});

const dialog = document.querySelector('dialog');

document.querySelectorAll('[data-project]').forEach((button) => {
  button.addEventListener('click', () => {
    const p = projects[button.dataset.project];

    document.getElementById('dialog-category').textContent = p.category;
    document.getElementById('dialog-title').textContent = p.title;
    document.getElementById('dialog-description').textContent = p.description;
    document.getElementById('dialog-stack').textContent = p.stack;

    const list = document.getElementById('dialog-details');
    list.replaceChildren(
      ...p.details.map((text) => {
        const li = document.createElement('li');
        li.textContent = text;
        return li;
      })
    );

    const source = document.getElementById('dialog-source');
    source.hidden = !p.source;

    if (p.source) {
      source.href = p.source;
    } else {
      source.removeAttribute('href');
    }

    dialog.showModal();
  });
});

document.querySelector('.close').addEventListener('click', () => dialog.close());

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) {
    const r = dialog.getBoundingClientRect();

    if (
      event.clientX < r.left ||
      event.clientX > r.right ||
      event.clientY < r.top ||
      event.clientY > r.bottom
    ) {
      dialog.close();
    }
  }
});