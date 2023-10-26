class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def get_price(self):
        return self.price

    def get_quantity(self):
        return self.quantity

    def get_total(self):
        return self.price * self.quantity

# Create instances of Product
phone = Product("Phone", 500, 2)
computer = Product("Computer", 1000, 1)

# Get the price, quantity, and total for each product
print(f"{phone.name}: Price = ${phone.get_price()}, Quantity = {phone.get_quantity()}, Total = ${phone.get_total()}")
print(f"{computer.name}: Price = ${computer.get_price()}, Quantity = {computer.get_quantity()}, Total = ${computer.get_total()}")
