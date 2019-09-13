A Sasamatic Sorting Algorithm
Or SSA
Is a sorting algorithm
for which time complexity is no issue.

This is because a Sasamatic Sorting Algorithm
works by making constant arbirtrary categorizations
while in an infinite loop.

That is to say,
given a piece of data,
perhaps a 1-dimensional array,
you would iterate over it from any direction.

In our case,
we will say from left to right.
Then, upon each iteration,
the sorting algorithm will read the data contained in the index
and expand it into multiple categories.

Upon reaching the next iteration
the current piece of data
will be placed into each of the previously created categories
and then expanded into multiple categories itself.

A human supervisor decides
how many categories an SSA will create
from each singular piece of data.
This is the only explicit and immutable part of an SSA.

Example categorizations can include:
length
composition
binary number
index number
arbitrary value (This is expanded upon in later chapters and is the most versatile)

And eventually you will create a Matrix.
And because the Matrix runs in an infinite loop
you have essentially created a Matrix of infinite dimensions.

If you run a 1-dimensional line through this n-dimensional matrix,
you get a sorted list of data
sorted by one of the many categories
explicity determined by the start.

In this sense,
SSA can be considered
to be a Complete Sorting Algorithm.
