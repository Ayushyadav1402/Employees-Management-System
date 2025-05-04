const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Sales Report",
        description: "Compile the Q1 sales data and create a summary report.",
        date: "2025-04-20",
        category: "Reporting",
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskNumber: "active 1"
      },
      {
        title: "Team Meeting",
        description: "Weekly sync-up with the team to discuss ongoing tasks.",
        date: "2025-04-21",
        category: "Meetings",
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskNumber: "completed 1"
      },
      {
        title: "Client Feedback Review",
        description: "Go through client feedback and note key action points.",
        date: "2025-04-19",
        category: "Client Work",
        active: false,
        newtask: true,
        completed: false,
        failed: false,
        taskNumber: "newtask 1"
      }
    ],
    taskCount: {
      active: 1,
      completed: 1,
      failed: 0,
      newtask: 3
    }
  },
  {
    id: 2,
    firstname: "Sanya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Database Optimization",
        description: "Optimize MySQL queries for better dashboard performance.",
        date: "2025-04-22",
        category: "Development",
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskNumber: "active 1"
      },
      {
        title: "Update Documentation",
        description: "Revise technical docs for new backend changes.",
        date: "2025-04-17",
        category: "Documentation",
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskNumber: "completed 1"
      },
      {
        title: "Bug Fixing",
        description: "Resolve reported bugs from last week’s sprint.",
        date: "2025-04-19",
        category: "Debugging",
        active: false,
        newtask: false,
        completed: false,
        failed: true,
        taskNumber: "failed 1"
      },
      {
        title: "UI Testing",
        description: "Run manual UI tests on mobile screens.",
        date: "2025-04-20",
        category: "Testing",
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskNumber: "active 2"
      }
    ],
    taskCount: {
      active: 2,
      completed: 1,
      failed: 1,
      newtask: 2,
    }
  },
  {
    id: 3,
    firstname: "Rohan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Customer Onboarding",
        description: "Call and onboard 3 new customers.",
        date: "2025-04-18",
        category: "Customer Support",
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        taskNumber: "active 1"
      },
      {
        title: "Prepare Training Slides",
        description: "Slides for internal product training session.",
        date: "2025-04-19",
        category: "Training",
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskNumber: "completed 1"
      },
      {
        title: "Product Demo",
        description: "Give live demo of new features to marketing team.",
        date: "2025-04-21",
        category: "Demo",
        active: false,
        newtask: false,
        completed: false,
        failed: true,
        taskNumber: "failed 1"
      }
    ],
    taskCount: {
      active: 1,
      completed: 1,
      failed: 1,
      newtask: 1,
    }
  },
  {
    id: 4,
    firstname: "Isha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Landing Page",
        description: "Create new visuals and layout for upcoming campaign.",
        date: "2025-04-20",
        category: "Design",
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskNumber: "active 1"
      },
      {
        title: "Review Peer Code",
        description: "Check merge requests and give feedback.",
        date: "2025-04-17",
        category: "Code Review",
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskNumber: "completed 1"
      },
      {
        title: "Push Production Release",
        description: "Handle deployment of v2.3 to production.",
        date: "2025-04-22",
        category: "DevOps",
        active: false,
        newtask: true,
        completed: false,
        failed: false,
        taskNumber: "newtask 1"
      },
      {
        title: "Post-mortem Analysis",
        description: "Write a report on last week’s system outage.",
        date: "2025-04-18",
        category: "Operations",
        active: false,
        newtask: false,
        completed: false,
        failed: true,
        taskNumber: "failed 1"
      }
    ],
    taskCount: {
      active: 1,
      completed: 1,
      failed: 1,
      newtask: 5,
    }
  },
  {
    id: 5,
    firstname: "Kabir",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Test Feature Toggle",
        description: "Verify toggle flags in staging environment.",
        date: "2025-04-21",
        category: "QA",
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskNumber: "active 1"
      },
      {
        title: "Analytics Dashboard",
        description: "Add user activity metrics to the dashboard.",
        date: "2025-04-19",
        category: "Analytics",
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskNumber: "completed 1"
      },
      {
        title: "Refactor Old Code",
        description: "Clean up legacy module and add comments.",
        date: "2025-04-20",
        category: "Refactoring",
        active: false,
        newtask: true,
        completed: false,
        failed: false,
        taskNumber: "newtask 1"
      }
    ],
    taskCount: {
      active: 1,
      completed: 1,
      failed: 0,
      newtask: 4,
    }
  }
]




  
const admin = [
  {
    id: 100,
    firstname: "Ayush",
    email: "admin@example.com",
    password: "123"
  }
];

export const setlocalstorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getlocalstorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const admin = JSON.parse(localStorage.getItem('admin')) || [];
  const loggedinuser = JSON.parse(localStorage.getItem('loggedinuser')) || null;
  return { employees, admin, loggedinuser };
};