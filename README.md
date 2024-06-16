Frontend Assignment for Intern - Inventory and Manufacturing Management System Objective:
Create a simplified version of an inventory and manufacturing unit management system focusing on an order system. The task should demonstrate proficiency in React and Next.js, with extensive use of array and object manipulation, filtering, and mapping, as well as some design logic.
Project Requirements:
Setup:
Create a Next.js application.
Use Tailwind CSS for styling. Data:
Use the following JSON data to represent orders, items, and inventory:
json
{
"orders": [
{
"id": 1,
"customer": "Customer A",
"items": [
{"id": 1, "name": "Item 1", "quantity": 5},
{"id": 2, "name": "Item 2", "quantity": 3}
],
"status": "Pending"
},
{
"id": 2,
"customer": "Customer B",
"items": [
{"id": 1, "name": "Item 1", "quantity": 2},
{"id": 3, "name": "Item 3", "quantity": 1}
],
"status": "Completed"
}
],
"items": [
{"id": 1, "name": "Item 1", "stock": 20},
{"id": 2, "name": "Item 2", "stock": 15},
{"id": 3, "name": "Item 3", "stock": 10}
]
}
Features:
Order List Page:
Display a list of orders with their ID, customer name, status, and item count.
Add a filter to view orders by status (e.g., Pending, Completed). Allow sorting orders by customer name and item count.
Order Details Page:
Show detailed information about a specific order when clicked from the list.
Display the items in the order, their quantities, and their stock availability.
Implement a button to mark the order as completed, updating the status accordingly.
Inventory Management:
Display a list of all items with their stock levels.
Allow filtering items by stock availability (e.g., in stock, out of stock).
Implement a form to add new items to the inventory.
Enable editing and deleting items from the inventory.
Adding Items:
Provide a form with input fields for item name and initial stock level. On form submission, add the new item to the inventory list.
Deleting Items:
Implement a delete button next to each item in the inventory list.
Clicking the delete button should remove the item from the inventory.
Design Logic:
Use Tailwind CSS to create a responsive and user-friendly interface.
Ensure the application is accessible and follows good UX practices.
Incorporate components like modals, notifications, and loading indicators.
Bonus:
Implement a search functionality to quickly find orders or items.
Add pagination to the order list and inventory list if there are many entries.
Use local storage to persist the state of the orders and inventory between page reloads.
Deliverables:
A GitHub repository with the complete code.
A README file with instructions on how to set up and run the project.
A brief document (or comments within the code) explaining the design choices and how array and object manipulations were implemented.
Evaluation Criteria:
Correctness and completeness of the implemented features.
Code quality and organization.
Use of React and Next.js best practices.
Creativity and user experience in the design. Clear documentation and code comments.
Deadline : 16th June till 8:30 PM
Send links to your live projects along with the solution to the assignment. Proof of work gives you a considerable edge.

