function greeting(parameterVariable) {
    
    console.log('Hello, World!');
    console.log(parameterVariable);

    // Write a line of code that prints parameterVariable to stdout using console.log:

    function main(){
        const parameterVariable = readLine();

        greeting(parameterVariable);
    }
}