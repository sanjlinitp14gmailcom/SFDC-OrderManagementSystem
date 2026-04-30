import { LightningElement } from 'lwc';

export default class AddTaskToList extends LightningElement {
    taskTitle = '';
    taskPriority = 'low';
    options = [
        {
        label:'Low',
        value:'low'
        },
        {
        label:'Medium',
        value:'medium'
        },
        {
        label:'High',
        value:'high'
        }
    ];

    taskList = [];
    nextId = 1;

    handleNameChange(event) {
        this.taskTitle = event.target.value;
        console.log('Task Title changed to:', this.taskTitle);
    }

    handlePriorityChange(event) {
        this.taskPriority = event.target.value;
        console.log('Task Priority changed to:', this.taskPriority);
    }

    handleButtonClick(event) {
        console.log('Add Task button clicked');
        console.log('Current taskTitle:', this.taskTitle);
        console.log('Current taskPriority:', this.taskPriority);
        console.log('Current taskList before:', JSON.stringify(this.taskList));
        
        // Validate input
        if (!this.taskTitle.trim()) {
            console.error('Task title cannot be empty');
            return;
        }
        
        // Create a new task object with unique ID
        const newTask = {
            id: this.nextId++,
            taskTitle: this.taskTitle,
            taskPriority: this.taskPriority
        };
        
        // Create a new array to trigger reactivity
        this.taskList = [...this.taskList, newTask];
        
        console.log('taskList after:', JSON.stringify(this.taskList));
        console.log('Array length:', this.taskList.length);
        
        // Clear inputs using reactive properties
        this.taskTitle = '';
        this.taskPriority = 'low';
    }
}