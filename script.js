$(document).ready(function() {
    // 1. jQuery Selectors: Caching DOM elements for better performance
    const $taskList = $('#task-list');
    const $newTaskInput = $('#new-task-input');
    const $searchInput = $('#search-input');
    const $taskCounter = $('#task-counter');
    const $emptyState = $('#empty-state');
    const $noResultsState = $('#no-results-state');
    
    // Counter to generate unique IDs for checkboxes so labels work correctly
    let taskIndex = 0;

    // Helper function to update the task counter and handle empty states
    function updateUI() {
        // DOM Traversal: Find all task items
        const totalTasks = $taskList.children('.task-item').length;
        
        // .html(): Update the task counter using HTML to demonstrate .html() usage
        $taskCounter.html('<strong>Total Tasks:</strong> ' + totalTasks);
        
        // Show/hide empty state based on whether there are tasks
        if (totalTasks === 0) {
            $emptyState.fadeIn(300); // jQuery Animation
        } else {
            $emptyState.fadeOut(300); // jQuery Animation
        }
    }

    // --- ADD TASK (Submit Event) ---
    $('#add-task-form').on('submit', function(event) {
        event.preventDefault(); // Prevent the page from refreshing
        
        // .val(): Get the value of the input and trim spaces
        const taskText = $newTaskInput.val().trim();
        
        // Prevent adding empty tasks
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        taskIndex++;
        const checkboxId = 'task-cb-' + taskIndex;
        
        // Create the task HTML structure
        const taskHTML = `
            <li class="task-item">
                <div class="task-content">
                    <input type="checkbox" class="task-checkbox" id="${checkboxId}">
                    <label class="task-text" for="${checkboxId}"></label>
                </div>
                <button type="button" class="delete-btn">Delete</button>
            </li>
        `;
        
        // Create a jQuery object from the HTML string
        const $newTask = $(taskHTML);
        
        // .text(): Set the text safely using jQuery to avoid XSS vulnerabilities
        $newTask.find('.task-text').text(taskText);
        
        // .append(): Add the new task to the list with a fadeIn animation
        $newTask.hide();
        $taskList.append($newTask);
        $newTask.fadeIn(300);
        
        // Clear the input field
        $newTaskInput.val('');
        
        // Update counter and states
        updateUI();
        
        // If the task list was hidden, slide it down
        if ($taskList.is(':hidden')) {
            $taskList.slideDown();
            $('#toggle-tasks-btn').text('Hide Tasks');
        }
        
        // Reset search so the new task is visible
        if ($searchInput.val() !== "") {
            $searchInput.val('');
            $taskList.children('.task-item').show();
            $noResultsState.hide();
        }
    });

    // --- COMPLETE TASK (Change Event) ---
    // Event delegation is used because checkboxes are dynamically added
    $taskList.on('change', '.task-checkbox', function() {
        // DOM Traversal: .closest() finds the nearest ancestor matching the selector
        const $taskItem = $(this).closest('.task-item');
        
        // .prop(): Check if the checkbox is checked
        if ($(this).prop('checked')) {
            // .addClass(): Add completed class (applies strike-through in CSS)
            $taskItem.addClass('completed');
        } else {
            // .removeClass(): Remove completed class
            $taskItem.removeClass('completed');
        }
    });

    // --- DELETE TASK (Click Event) ---
    // Event delegation for dynamically added delete buttons
    $taskList.on('click', '.delete-btn', function() {
        // .closest() and .fadeOut(): Find the parent task item, animate it out, then remove it from DOM
        $(this).closest('.task-item').fadeOut(300, function() {
            $(this).remove();
            updateUI();
            
            // Trigger keyup on search to re-evaluate search results just in case
            $searchInput.trigger('keyup');
        });
    });

    // --- CLEAR COMPLETED TASKS (Click Event) ---
    $('#clear-completed-btn').on('click', function() {
        // .find() and .fadeOut(): Find all tasks with class 'completed', animate out, then remove
        const $completedTasks = $taskList.find('.task-item.completed');
        
        if ($completedTasks.length > 0) {
            $completedTasks.fadeOut(300, function() {
                $(this).remove();
                updateUI();
                $searchInput.trigger('keyup');
            });
        }
    });

    // --- SEARCH / FILTER TASKS (Keyup Event) ---
    $searchInput.on('keyup', function() {
        const searchText = $(this).val().toLowerCase();
        let visibleCount = 0;
        
        // Loop through each task to check if it matches the search query
        $taskList.children('.task-item').each(function() {
            // .find() and .text()
            const text = $(this).find('.task-text').text().toLowerCase();
            
            if (text.includes(searchText)) {
                $(this).show();
                visibleCount++;
            } else {
                $(this).hide();
            }
        });
        
        // Logic to show "no results" state
        if (visibleCount === 0 && $taskList.children('.task-item').length > 0 && searchText !== "") {
            $noResultsState.show();
        } else {
            $noResultsState.hide();
        }
    });

    // --- SHOW / HIDE TASKS (Click Event + jQuery Animations) ---
    $('#toggle-tasks-btn').on('click', function() {
        const $btn = $(this);
        
        if ($btn.text() === 'Hide Tasks') {
            // jQuery Animation: .slideUp() hides the element with a sliding motion
            $taskList.slideUp(300, function() {
                // Callback function executes after animation completes
                $btn.text('Show Tasks');
            });
        } else {
            // jQuery Animation: .slideDown() shows the element with a sliding motion
            $taskList.slideDown(300, function() {
                $btn.text('Hide Tasks');
            });
        }
    });

    // Initialize UI on page load
    updateUI();
});
