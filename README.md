# Interactive To-Do List Using jQuery

**Student Name:** Chirag
**Roll Number:** [KEEP THIS AS A PLACEHOLDER]

## Objective
The objective of this Assessment 1 project is to build a complete, interactive, and beginner-friendly web application (To-Do List) utilizing HTML, CSS, JavaScript, and specifically focusing on DOM manipulation, event handling, and animations using **jQuery**. No modern frontend frameworks like React or CSS frameworks like Bootstrap were used, adhering strictly to core web technologies.

## Technologies Used
* **HTML5:** For the structure of the application.
* **CSS3:** For styling, responsive design, and layout.
* **JavaScript & jQuery (via CDN):** For main functionality, logic, DOM manipulation, and dynamic interactions.

## Features
1. **Add Tasks:** Users can enter a task and press "Add Task" or "Enter" to dynamically add it without refreshing the page. Empty tasks are prevented.
2. **Complete Tasks:** Checkboxes allow marking tasks as completed, instantly applying a visual line-through style.
3. **Delete Tasks:** Individual tasks can be removed using the "Delete" button.
4. **Clear Completed:** A single button removes all tasks marked as completed.
5. **Task Counter:** A dynamic counter displays the total number of tasks currently in the list.
6. **Search & Filter:** A real-time search box filters the task list as the user types.
7. **Show/Hide Tasks:** Users can toggle the visibility of the task list using smooth animations.
8. **Empty States:** Useful messages are displayed when the list is empty or when search yields no results.
9. **Responsive Design:** The application looks great on both desktop and mobile devices.

## jQuery Concepts Used
The project clearly demonstrates the following jQuery features:
* **jQuery Selectors:** Used extensively (e.g., `$('#task-list')`, `$('.task-item')`) to target elements.
* **`.html()` & `.text()`:** Used for updating the task counter (`$taskCounter.text(...)`) and safely setting task text to prevent XSS.
* **`.val()`:** Used to retrieve input from the "Add Task" and "Search" fields.
* **`.addClass()` & `.removeClass()`:** Used to toggle the `completed` style dynamically on change.
* **`.append()`:** Used to add new task items to the DOM.
* **`.remove()`:** Used to delete tasks from the DOM.
* **`.prop()` / `.attr()`:** Used `.prop('checked')` to determine if a checkbox was checked or unchecked.
* **Event Handling (`.on()`):**
  * **`submit` Event:** Handled form submission for adding tasks, preventing default page reloads.
  * **`change` Event:** Used for event delegation on dynamically generated checkboxes.
  * **`click` Event:** Used for delete buttons, clear completed, and toggling visibility.
  * **`keyup` Event:** Used for real-time filtering in the search box.
* **DOM Traversal:** Used `.closest('.task-item')` to locate the specific task container when interacting with buttons/checkboxes inside it, and `.find()` to locate elements within parents.
* **Animations:** Used `.slideUp()` and `.slideDown()` for the "Show/Hide Tasks" feature.

## How to Run
This project does not require any backend server or build tools like Node.js.
1. Download or clone the project folder.
2. Open the folder and locate `index.html`.
3. Double-click `index.html` to open it in your default web browser (Chrome, Firefox, Edge, Safari, etc.).
4. The application will start immediately. Ensure you have an active internet connection so the jQuery library can load from the CDN.

## Expected Working
Upon opening the application, you will see an empty To-Do list with a message "No tasks yet." You can enter tasks into the input field and click "Add Task". Tasks will appear below. Checking the checkbox will strike through the text. Clicking "Delete" will remove the task. The search bar will filter tasks in real-time, and "Hide Tasks" will animate the list away.

## Screenshot placeholders
* [Screenshot: Main Interface]
* [Screenshot: Adding and Completing Tasks]
* [Screenshot: Searching/Filtering Tasks]

## Conclusion
This project successfully fulfills the requirements of Assessment 1 by demonstrating practical web development skills, emphasizing jQuery for dynamic and interactive user interfaces while maintaining clean code and a professional design.
