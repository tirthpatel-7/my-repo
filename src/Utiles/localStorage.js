const employee = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Prepare Presentation",
          description: "Create a slide deck for the upcoming client meeting.",
          date: "2025-01-05",
          category: "Work"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          title: "Update CRM Data",
          description: "Ensure all client interactions are updated in the system.",
          date: "2025-01-06",
          category: "Data Entry"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Submit Weekly Report",
          description: "Provide a summary of weekly activities and achievements.",
          date: "2025-01-04",
          category: "Reporting"
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Review Codebase",
          description: "Analyze the repository for potential optimizations.",
          date: "2025-01-05",
          category: "Development"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          title: "Plan Team Meeting",
          description: "Schedule and create an agenda for the team meeting.",
          date: "2025-01-06",
          category: "Planning"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Fix Bugs",
          description: "Resolve issues reported in the bug tracker.",
          date: "2025-01-03",
          category: "Bug Fixing"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Prepare Budget Proposal",
          description: "Draft a budget proposal for the upcoming quarter.",
          date: "2025-01-02",
          category: "Finance"
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Organize Workshop",
          description: "Coordinate logistics for the upcoming technical workshop.",
          date: "2025-01-07",
          category: "Events"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Deploy New Feature",
          description: "Roll out the latest feature to the production environment.",
          date: "2025-01-03",
          category: "Deployment"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Conduct Market Research",
          description: "Gather data on customer preferences for the new product.",
          date: "2025-01-01",
          category: "Research"
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Prepare Training Material",
          description: "Develop material for the employee training program.",
          date: "2025-01-04",
          category: "Training"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Schedule Interviews",
          description: "Coordinate with candidates and set up interview times.",
          date: "2025-01-06",
          category: "HR"
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Design New Brochure",
          description: "Create a brochure for the marketing campaign.",
          date: "2025-01-05",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Host Webinar",
          description: "Present a webinar on industry trends.",
          date: "2025-01-03",
          category: "Education"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Launch Advertising Campaign",
          description: "Initiate the planned digital advertising campaign.",
          date: "2025-01-02",
          category: "Marketing"
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];
  
  console.log(employee);
  console.log(admin);

  export const setLocalStorage=()=>{
localStorage.setItem('employees', JSON.stringify(employee))
localStorage.setItem('admin', JSON.stringify(admin))
  }  
  export const getLocalStorage=()=>{
    const employee = JSON.parse(localStorage.getItem('employee'))
    const admin = JSON.parse(localStorage.getItem('admin'))
   
    console.log(employee, admin)
  }  