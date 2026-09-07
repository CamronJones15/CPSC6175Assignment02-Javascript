/**
 * Week 2 Assignment - Main Entry Point
 * 
 * This file demonstrates how your functions work together.
 * You don't need to modify this file - it's just for demonstration!
 * 
 * To run this file: npm start
 */

// Import functions from your assignment files
import { createUserConfig, createWelcomeMessage } from './01-variables.js';
import { add, greet } from './02-functions.js';
import { welcomeUser, formatUserInfo } from './03-templates.js';
import { extractUserInfo } from './04-destructuring.js';
import { formatUserData } from './05-promises.js';
import { capitalize, formatCurrency } from './06-modules.js';

console.log('🚀 Week 2 Assignment - JavaScript Fundamentals Demo\n');

// Demonstrate variables
console.log('📋 Variables Demo:');
try {
    const config = createUserConfig();
    console.log('User config:', config);
} catch (error) {
    console.log('❌ Variables not implemented yet:', error.message);
}

// Demonstrate functions
console.log('\n⚡ Functions Demo:');
try {
    if (add && greet) {
        console.log('5 + 3 =', add(5, 3));
        console.log(greet('Student'));
    } else {
        console.log('❌ Functions not implemented yet');
    }
} catch (error) {
    console.log('❌ Functions error:', error.message);
}

// Demonstrate template literals
console.log('\n📝 Template Literals Demo:');
try {
    if (welcomeUser && formatUserInfo) {
        console.log(welcomeUser('Alice'));
        const user = { name: 'Bob', age: 25, city: 'Boston' };
        console.log(formatUserInfo(user));
    } else {
        console.log('❌ Template literals not implemented yet');
    }
} catch (error) {
    console.log('❌ Template literals error:', error.message);
}

// Demonstrate destructuring
console.log('\n🎯 Destructuring Demo:');
try {
    if (extractUserInfo) {
        const user = { name: 'Charlie', email: 'charlie@example.com' };
        console.log(extractUserInfo(user));
    } else {
        console.log('❌ Destructuring not implemented yet');
    }
} catch (error) {
    console.log('❌ Destructuring error:', error.message);
}

// Demonstrate promises
console.log('\n⏰ Promises Demo:');
try {
    if (formatUserData) {
        const userData = { name: 'Diana', age: 30 };
        formatUserData(userData).then(result => {
            console.log('Promise result:', result);
        }).catch(error => {
            console.log('❌ Promise error:', error.message);
        });
    } else {
        console.log('❌ Promises not implemented yet');
    }
} catch (error) {
    console.log('❌ Promises error:', error.message);
}

// Demonstrate modules
console.log('\n📦 Modules Demo:');
try {
    if (capitalize && formatCurrency) {
        console.log('Capitalized:', capitalize('hello WORLD'));
        console.log('Currency:', formatCurrency(42.99));
    } else {
        console.log('❌ Modules not implemented yet');
    }
} catch (error) {
    console.log('❌ Modules error:', error.message);
}

console.log('\n✅ Demo complete! Run "npm test" to check your implementations.');
console.log('💡 Tip: Complete each TODO in the source files to see more functionality');