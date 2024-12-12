from . import db

class InventoryItem(db.Model):
    Item_SKU = db.Column(db.String, primary_key=True)
    Item_Name = db.Column(db.String, nullable=False)
    Item_Description = db.Column(db.Text, nullable=True)
    Item_Price = db.Column(db.Float, nullable=False)
    Item_Qty = db.Column(db.Integer, nullable=False)

class Customer(db.Model):
    c_ID = db.Column(db.Integer, primary_key=True)
    c_name = db.Column(db.String, nullable=False)
    c_email = db.Column(db.String, nullable=False, unique=True)
    c_contact = db.Column(db.String, nullable=False)

class Staff(db.Model):
    s_ID = db.Column(db.Integer, primary_key=True)
    s_name = db.Column(db.String, nullable=False)
    s_email = db.Column(db.String, nullable=False, unique=True)
    s_isAdmin = db.Column(db.Boolean, default=False)
    s_contact = db.Column(db.String, nullable=False)

class Transaction(db.Model):
    t_ID = db.Column(db.Integer, primary_key=True)
    c_ID = db.Column(db.Integer, db.ForeignKey('customer.c_ID'), nullable=False)
    t_date = db.Column(db.DateTime, nullable=False)
    t_amount = db.Column(db.Float, nullable=False)
    t_category = db.Column(db.String, nullable=False)
def validate_price(self):
    if self.Item_Price < 0:
        raise ValueError("Price cannot be negative")