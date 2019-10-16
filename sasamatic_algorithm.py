# Please reference Sasame by Uriah Sanders :)

# A Sasamatic Algorithm
# in the simplest form
# is a Sasamatic Gift
# from Sasame.

# It expands a seed of data
# into something more
# and breaks it into useful paths
# fractally and forever

# This is the simplest possible implementation of Sasame.
# Constantly adding speech, sieve, and pathing functions
# via 'hard-coding', will ALWAYS result
# in a general AI that lacks a domain,
# per Godel's Incompleteness Theorem
class Sasame:
    # Where data is a string
    # speech_transformations is a list
    # sieve_transformations is a list
    def __init__(self, data, speech_transformations, sieve_transformations, num_iterations=1):
        self.sasame = []
        self.data = data
        self.speech_transformations = speech_transformations
        self.sieve_transformations = sieve_transformations
        self.num_iterations = num_iterations
        for i in range(num_iterations):
            self.sasamatic_algorithm(self.data)

    # Transform seed data and output
    # seed contains a string
    def sasamatic_speech(self, seed):
        # Now add to seed using sasamatic_twist
        seed = self.sasamatic_twist(seed, self.sasamatic_speech_transformations)
        return seed

    # Modify a set of data
    # seed contains a set of modification functions
    def sasamatic_twist(self, seed):
        for transformation in seed:
            self.data += transformation(self.data)
        return self.data

    # Rank a set of data
    # seed contains a set of ranking functions
    def sasamatic_sieve(self, seed):
        for transformation in seed:
            self.data += transformation(self.data)
        return self.data

    # Say everything ever
    # And find a useful path through the nonsense
    def sasamatic_algorithm(self):
        while(true):
            # Build data
            if self.num_iterations > 0:
                self.data = sasamatic_speech(self.data)
            # Rank/categorize data
            self.data = sasamatic_sieve(self.data)
            # Add data to the list of all data
            self.sasame = sasame.append(self.data)

    # Find a useful path
    # Through sieved sasamatic speech
    def sasamatic_path(self, rank_name):
        # sieve_transformations could add a line
        # with their unique_id to the data
        # and this is how they are used to rank data
        # Then you just go through the most recent
        # iteration of sasame which is the most complete
        # The below would return an array broken up into chunks
        # which are defined by the sieve function.
        # Sieve functions are hard coded, so all
        # sasamatic paths are 'useful' ones
        return self.sasame[-1].split(rank_name)

# USAGE:

# Transformation functions are hard coded in this example, 
# but could also theoretically be generated
# sasamatically

# Seed for Sasamatic twist
# Contains a set of modification functions
# For transforming Sasamatic Speech
sasamatic_speech_transformations = {}
# Seed for Sasamatic Sieve
# Contains a set of ranking functions
# That creates ways of ranking portions of Sasamatic Speech
sasamatic_sieve_transformations = {}
# How many times will we run the algorithm?
num_iterations = 1 #temp
# Create ranked and expanded data
sasame = Sasame('Sasame', sasamatic_speech_transformations, sasamatic_sieve_transformations, num_iterations)
# Choose a path through the data
path = sasame.sasamatic_path('favorite_path_name')

# NOTE:
# A Sasamatic Algorithm is like a Genetic Algorithm,
# except unfit genes are simply retained for future use
# rather than eliminated via a fitness function
