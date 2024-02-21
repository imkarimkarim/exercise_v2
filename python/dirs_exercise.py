import os
import subprocess


def search_file(directory, filename):
    """
    mmd was here
    """
    for root, dirs, files in os.walk(directory):
        # print(root)
        # print(files)
        my_list = []
        for f in files:
            if filename in f:
                my_list.append(os.path.join(root, f))
    if len(my_list) > 0:
        return my_list
    return None


# path = '/home/alirezamadani/Pictures/wallpapers/sv/silicon-valley_jpg.png'
path = '/home/alirezamadani/Pictures/wallpapers/sv'
res = search_file(path, 'sili')
if res:
    print(res)
    subprocess.run(["xdg-open", res[0]])
else:
    print('mmd was not here')
