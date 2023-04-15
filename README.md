
We want to separate concrete class intantiations from the code because as the more typr of classes are added, it will make out code open for modification that's what we don't want.

Factories handle the details of object creation.


We can simply create  class to just instantantiate the classs bases on the the type. /if we expect more types to be introduced in future.

The Factory Method Pattern encapsulates object creation by letting subclasses decide what objects to create. 

Creator Classes -> Pizza Store classes and its subclasses (they really don't know which pizza is finally being created).
Product Classes -> Product is pizza 

Creator -> Pizza Store
Factory Method -> createPizza()
concrete creator -> nyCheezeStore 
Products -> Pizza

The Factory Method Pattern is useful if you’ve only got one concrete creator because you are decoupling the implementation of the product from its use. If you add additional products or change a product’s implementation, it will not affect your Creator (because the Creator is not tightly coupled to any ConcreteProduct). 

We can produce more than one product as well using factory pattern

We dont need to have creator and factpry method as abstract always

The following guidelines can help you avoid OO designs that violate the Dependency Inversion Principle:

1. No variable should hold a reference to a concrete class.
2. No class should derive from a concrete class.
3. No method should override an implemented method of any of its base classes.

These are the guidlines not rules


The Abstract Factory Pattern

Now we have decoupled our code from the by creating a factory which will give ingredient based on region. So we no more need to create classes for each pizza of each region.

abstract factory -> IngredientFactory
family of products -> redSause, oil
Factory method -> createPizza()


Advantages

Disadvantages
