def calculate_fitness(schedule):
    fitness_global = 0
    fitness_max = 0
# the following functions are all parameter related, the user should be able to use these functions to have their desired schedule change. 

    def class_in_periods_timetable(class_, periods, fitness):
        nonlocal fitness_global  
        nonlocal fitness_max
        class_period = classes.index(class_) + 1 if class_ in classes else 0
        if isinstance(periods, int):  # Check if periods is an integer
            if class_period == periods:  # Compare with a single period
                fitness_global += fitness
        else:  # Handle the case where periods is an iterable
            if class_period in periods:
                fitness_global += fitness
        if fitness > 0: 
            fitness_max += fitness

    def class_in_period_teacher(teacher, class_, period, fitness):
        nonlocal fitness_global
        nonlocal fitness_max
        if teacher in schedule and class_ in schedule[teacher]:
            class_period = schedule[teacher].index(class_) + 1
        if class_period == period:
            fitness_global += fitness
        if fitness > 0: 
            fitness_max += fitness
        
    def conflicting_class(teacher1, teacher2, teacher1class, teacher2class, fitness): 
        nonlocal fitness_global
        nonlocal fitness_max
        if teacher1 in schedule and teacher2 in schedule:
            if teacher1class in schedule[teacher1] and teacher2class in schedule[teacher2]: 
                fitness_global += fitness
        if fitness > 0: 
            fitness_max += fitness
#user should be able to call the functions within this larger function to influence the desired fitness.

    return fitness_global
