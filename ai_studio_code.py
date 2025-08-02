import os

url = "https://otieu.com/4/8488666"
num_files = 50
output_directory = "html_files"

# Çıkış dizinini oluştur (varsa silmez, yoksa oluşturur)
if not os.path.exists(output_directory):
    os.makedirs(output_directory)

for i in range(1, num_files + 1):
    file_name = os.path.join(output_directory, f"sayfa_{i}.html")
    
    html_content = f"""
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sayfa {i}</title>
    <style>
        body {{
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }}
        .container {{
            text-align: center;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }}
        iframe {{
            width: 90vw; /* Görünüm genişliğinin %90'ı */
            height: 70vh; /* Görünüm yüksekliğinin %70'i */
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-bottom: 20px;
        }}
        button {{
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }}
        button:hover {{
            background-color: #0056b3;
        }}
    </style>
</head>
<body>
    <div class="container">
        <h1>Sayfa {i}</h1>
        <iframe id="contentFrame" src="{url}"></iframe>
        <button onclick="refreshFrame()">Sayfayı Yenile</button>
    </div>

    <script>
        function refreshFrame() {{
            var iframe = document.getElementById('contentFrame');
            iframe.src = iframe.src; // iframe'in mevcut URL'sini yeniden yükler
        }}
    </script>
</body>
</html>
"""
    with open(file_name, "w", encoding="utf-8") as f:
        f.write(html_content)

print(f"{num_files} adet HTML dosyası '{output_directory}' dizinine oluşturuldu.")