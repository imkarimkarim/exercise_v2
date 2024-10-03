# prompt

i have a long list of job titiles json. i want to get meta data about this data and also group them based on title(the title are not explicitly equal but similar). i want to know which title has repeated more

To get the metadata and group the job titles based on similarity, you can follow these steps:

1. **Load the JSON data**: Assuming you have the job titles in a JSON file, you can load the data into a Python data structure, such as a list or a dictionary.

2. **Preprocess the job titles**: Before grouping the titles, you may want to preprocess the data by converting all titles to lowercase, removing any special characters or extra spaces, and potentially applying stemming or lemmatization to normalize the titles.

3. **Get metadata about the data**: To get the metadata, you can use Python's built-in functions and libraries. For example, you can get the number of unique job titles, the most common titles, and the frequency of each title.

```python
import json
from collections import Counter

# Load the JSON data
with open('job_titles.json', 'r') as f:
    job_titles = json.load(f)

# Preprocess the job titles
job_titles = [title.lower().strip() for title in job_titles]

# Get metadata
num_titles = len(job_titles)
unique_titles = len(set(job_titles))
title_counts = Counter(job_titles)
most_common_titles = title_counts.most_common()

print(f"Total number of job titles: {num_titles}")
print(f"Number of unique job titles: {unique_titles}")
print("Most common job titles and their frequencies:")
for title, count in most_common_titles:
    print(f"{title}: {count}")
```

4. **Group the job titles based on similarity**: To group the job titles based on similarity, you can use a clustering algorithm or a text similarity measure, such as cosine similarity or Levenshtein distance. Here's an example using the `fuzzywuzzy` library, which provides a simple way to measure the similarity between strings:

```python
from fuzzywuzzy import process

# Group the job titles based on similarity
grouped_titles = {}
for title in job_titles:
    best_match, score = process.extractOne(title, job_titles)
    if score >= 80:
        if best_match not in grouped_titles:
            grouped_titles[best_match] = []
        grouped_titles[best_match].append(title)
    else:
        grouped_titles[title] = [title]

# Print the grouped job titles and their frequencies
for title, group in grouped_titles.items():
    print(f"{title}: {len(group)}")
```

In this example, we use the `process.extractOne()` function from the `fuzzywuzzy` library to find the best match for each job title in the list. If the similarity score is at least 80%, we group the titles under the best match. Otherwise, we create a new group for the title.

The output will show the grouped job titles and the number of titles in each group, which can help you identify the most repeated or common job titles in your dataset.
