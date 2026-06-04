import urllib.request, urllib.error

ids = ['1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXf', '1ME7kSn66aGLdTylUAMQXC89YmC2DPNWu', '1zzlC1tmX5YAM48PmTb9kqkoByXK3qIR7', '1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6c', '1KhfoMMmKBYsC0Yleq3D_7gnvQecK6XLS']

for fid in ids:
    url = f"https://drive.google.com/uc?export=download&id={fid}"
    try:
        req = urllib.request.Request(url, method='HEAD')
        resp = urllib.request.urlopen(req)
        print(f"{fid}: {resp.getheader('Content-Type')}")
    except urllib.error.HTTPError as e:
        print(f"{fid}: HTTP {e.code}")
    except Exception as e:
        print(f"{fid}: {e}")
