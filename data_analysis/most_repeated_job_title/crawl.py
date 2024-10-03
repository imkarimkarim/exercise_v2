import requests
from bs4 import BeautifulSoup
import os
import csv 

    
def get_titles(page = 1):
    url = "https://jobinja.ir/jobs?&filters%5Bjob_categories%5D%5B%5D=&filters%5Bkeywords%5D%5B0%5D=%D8%A7%D9%85%D8%B1%DB%8C%D9%87&filters%5Blocations%5D%5B%5D=&preferred_before=1724821237&sort_by=relevance_desc" + "&page=" + str(page)

    # Make a GET request
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
    response = requests.get(url, headers=headers)

    # Check the status code
    if response.status_code == 200:
        # Get the HTML content
        html_content = response.text

        # Parse the HTML content using a library like BeautifulSoup
        soup = BeautifulSoup(html_content, 'html.parser')

        # Find all the <a> tags with the class "c-jobListView__titleLink"
        job_title_links = soup.find_all('a', {'class': 'c-jobListView__titleLink'})

        # Extract the text from each <a> tag
        job_titles = [link.text.strip() for link in job_title_links]
        return job_titles

        # # Print the job titles
        # for job_title in job_titles:
        #     print(job_title)
    else:
        print(f'Request failed with status code: {response.status_code}')


job_titles = []
file_path = './jobs_titles.cvs'

for i in range(1, 4):
    job_titles += get_titles(i)
    
if os.path.exists(file_path) and len(job_titles) > 0:
    os.remove(file_path)
    
if(len(job_titles) > 0):
    # Open the file in write mode The newline='' argument in the open() function ensures that there are no extra
    with open(file_path, 'w', newline='') as file:
        # writer = csv.writer(file, delimiter="")
        # writer.writerows(job_titles)
        for jt in job_titles:
            file.write(str(jt) + '\n')
        # file.write(job_titles)


