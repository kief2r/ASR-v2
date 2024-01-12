import sys
import time
import pandas as pd 
from excel_processor import process_excel
from genetic_algorithm import genetic_algorithm, calculate_fitness

def main(file_path):
    t0 = time.time()

    teachers_classes = process_excel(file_path)
    best_schedule = genetic_algorithm(teachers_classes, generations=15000, mutation_chance=0.1, population_size=100)
    final_fitness_score = calculate_fitness(best_schedule)

    schedule_df = pd.DataFrame(best_schedule)
    html_schedule = schedule_df.to_html()  # Convert DataFrame to HTML
    with open('../../client/public/teacher_schedule.html', 'w') as file:
        file.write(html_schedule)
    output_path ='../../client/public/teacher_timetable.html'
    schedule_df.to_excel(output_path, index=False)

    t1 = time.time()
    print('Time taken:', t1 - t0, 'seconds')
    print("Fitness =", final_fitness_score)

if __name__ == "__main__":
    file_path = sys.argv[1]
    main(file_path)
