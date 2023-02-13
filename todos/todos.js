let input = prompt('what would you like to do?');
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('**************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*********')
    } else if (input ==='new') {
            const newTodo = prompt('OK, what is the new todo?');
            console.log(`${newTodo}`)
    }input = prompt('what would you like to do?')
}
console.log('OK QUIT THE APP!')