import urllib.request, re
url = 'https://drive.google.com/drive/folders/1ZqpFovxmhuWPdyMKwGsBkAOfwGaQ7S4E?usp=sharing'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')
# Find the ID associated with Tanmay_Bhuran_Resume.pdf
match = re.search(r'\[\"(1[a-zA-Z0-9_-]{32})\"[^\]]*?Tanmay_Bhuran_Resume\.pdf', html, re.IGNORECASE)
import os

if match:
    new_id = match.group(1)
    print("Found next to Tanmay_Bhuran_Resume.pdf:", new_id)
    
    # Update index.html
    index_path = 'index.html'
    if os.path.exists(index_path):
        with open(index_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace the specific resume download link ID
        updated_content = re.sub(
            r'(href="https://drive\.google\.com/uc\?export=download&id=)[a-zA-Z0-9_-]+(")',
            rf'\g<1>{new_id}\g<2>',
            content
        )
        
        if content != updated_content:
            with open(index_path, 'w', encoding='utf-8') as f:
                f.write(updated_content)
            print("Successfully updated index.html with the new Resume ID.")
        else:
            print("index.html was already up to date or the link format wasn't found.")
    else:
        print("index.html not found in the current directory.")
else:
    # Try another pattern
    matches = re.findall(r'\[\"(1[a-zA-Z0-9_-]{32})\"[^\n]{0,200}?Tanmay_Bhuran_Resume\.pdf', html, re.IGNORECASE)
    print("Found near Tanmay_Bhuran_Resume.pdf:", matches)
