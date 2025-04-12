def demonstrate_variables():
    # Numbers
    age = 25                  # integer
    height = 5.9             # float
    is_student = True        # boolean
    name = "John Doe"        # string
    
    print("\n=== Variables and Data Types ===")
    print(f"Name: {name} ({type(name)})")
    print(f"Age: {age} ({type(age)})")
    print(f"Height: {height} ({type(height)})")
    print(f"Is Student?: {is_student} ({type(is_student)})")

def demonstrate_lists():
    # Lists - ordered, mutable collection
    fruits = ["apple", "banana", "orange", "mango"]
    
    print("\n=== List Operations ===")
    print(f"Original list: {fruits}")
    
    # List operations
    fruits.append("grape")           # Add item
    print(f"After append: {fruits}")
    
    fruits.remove("banana")          # Remove item
    print(f"After remove: {fruits}")
    
    print(f"First fruit: {fruits[0]}")
    print(f"Last fruit: {fruits[-1]}")
    print(f"Sliced fruits: {fruits[1:3]}")  # Slicing

def demonstrate_dictionary():
    # Dictionary - key-value pairs
    student = {
        "name": "Alice",
        "age": 20,
        "grades": {"math": 90, "science": 85, "history": 88}
    }
    
    print("\n=== Dictionary Operations ===")
    print(f"Student info: {student}")
    print(f"Name: {student['name']}")
    print(f"Math grade: {student['grades']['math']}")
    
    # Adding new key-value pair
    student["email"] = "alice@example.com"
    print(f"After adding email: {student}")

def demonstrate_control_flow(number):
    print("\n=== Control Flow ===")
    
    # If-elif-else statement
    if number > 0:
        print(f"{number} is positive")
    elif number < 0:
        print(f"{number} is negative")
    else:
        print("The number is zero")
    
    # For loop
    print("\nCounting from 1 to 5:")
    for i in range(1, 6):
        print(i, end=" ")
    
    # While loop
    print("\n\nWhile loop example:")
    count = 3
    while count > 0:
        print(f"Countdown: {count}")
        count -= 1

def calculate_average(numbers):
    """
    Calculate the average of a list of numbers
    Args:
        numbers (list): List of numbers
    Returns:
        float: Average of the numbers
    """
    try:
        return sum(numbers) / len(numbers)
    except ZeroDivisionError:
        return 0
    except TypeError:
        return "Error: All elements must be numbers"

def main():
    print("Welcome to Python Basics Demo!")
    
    # Demonstrate variables and data types
    demonstrate_variables()
    
    # Demonstrate lists
    demonstrate_lists()
    
    # Demonstrate dictionary
    demonstrate_dictionary()
    
    # Demonstrate control flow
    demonstrate_control_flow(5)
    
    # Demonstrate function with error handling
    print("\n=== Function with Error Handling ===")
    numbers = [10, 20, 30, 40, 50]
    average = calculate_average(numbers)
    print(f"Average of {numbers}: {average}")
    
    # Demonstrate error handling
    invalid_numbers = [10, "20", 30]  # Contains a string
    average = calculate_average(invalid_numbers)
    print(f"Average of {invalid_numbers}: {average}")

if __name__ == "__main__":
    main()
    def is_palindrome(s):
        """
        Check if a given string is a palindrome
        Args:
            s (str): Input string
        Returns:
            bool: True if the string is a palindrome, False otherwise
        """
        # Remove non-alphanumeric characters and convert to lowercase
        cleaned_s = ''.join(char.lower() for char in s if char.isalnum())
        # Check if the cleaned string is equal to its reverse
        return cleaned_s == cleaned_s[::-1]

    # Demonstrate palindrome function
    print("\n=== Palindrome Check ===")
    test_strings = ["A man, a plan, a canal, Panama", "racecar", "hello", "Was it a car or a cat I saw?"]
    for s in test_strings:
        result = is_palindrome(s)
        print(f"'{s}' is a palindrome: {result}")

