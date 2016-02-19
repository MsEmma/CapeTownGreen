---
layout: default
---

## Traffic Light

![](/img/traffic-lights.jpg)

Now that you have the taxi moving we need to get the Traffic Light working and get the taxi to stop at red lights.

For that we are going to create a constructor function / class to control Traffic Lights, it will use the `taxiLocationCounter` counter to find the traffic light closest to the taxi.

To change the traffic lights we need to add and remove classes to/from the `robot` element using [`classList`](https://docs.webplatform.org/wiki/dom/Element/classList).

## Create a function

Create a function similar to `createLocationClass` called `createTrafficLightClass`. It should take a number as a parameter and return a string such as `.one-of-nine`.

## A TrafficLight with class

Our traffic light constructor function should have these functions:

  function name | functionality                                                              |
----------------|----------------------------------------------------------------------------|
`makeGreen`     | switch on the green light on the traffic light
`makeOrange`    | switch on the orange light on the traffic light
`makeRed`       | switch the red light on the traffic light
`color`         | return the current color of the traffic light based on the internal state

It should take a number as a parameter, which should be the current value of `taxiLocationCounter`.

The classes for each color are:

color   | class
--------|-------------------
red     | lights-stop
orange  | lights-slowdown
green   | lights-go

To locate a Traffic Light in the DOM you can use the `document.querySelector` function, like you did for `body` in the first function.

You can use it like this:

{% highlight javascript %}
//should return ".three-of-nine"
var className = createTrafficLightClass(3);

//get the element to use
var trafficLightElement = document.querySelector(className);
{% endhighlight %}

To change the traffic light you can add and remove css classes like this:

{% highlight javascript %}
// make it green
trafficLightElement.classList.add("lights-go");

//make it orange
trafficLightElement.classList.add("lights-slowdown");

// remove orange
trafficLightElement.classList.remove("lights-slowdown");

// make it red
trafficLightElement.classList.add("lights-stop");
{% endhighlight %}

Use code like this in the `makeGreen`, `makeRed` and `makeOrange` functions.

The `color` function could check what classes the element in scope has, using code like this:

{% highlight javascript %}
if (trafficLightElement.classList.contains("lights-slowdown")){
    return 'orange';
}
{% endhighlight %}

Create a TrafficLight object instance in the `onkeydown` function using the `taxiLocationCounter` to get the TrafficLight closest to the taxi. Here's an example:

{% highlight javascript %}
var trafficLight = new TrafficLight(taxiLocationCounter);
{% endhighlight %}

Make the traffic light go red when pressing the up arrow. Make it go green when pressing the down arrow. As the taxi moves forward, the set of lights just in front of the taxi should be affected by the up and down arrows.

The next thing is to stop a taxi from moving forward if the light is red. Check the value of the `trafficLight.color()` if it is red, stop the taxi from moving forward. Toggling the TrafficLight to green should allow the taxi to move forward.
