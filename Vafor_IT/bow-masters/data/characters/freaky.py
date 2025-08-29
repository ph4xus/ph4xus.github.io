import os
import json

def replace_localized_name_with_name_in_folder(folder_path):
    for filename in os.listdir(folder_path):
        if filename.endswith('.json'):
            file_path = os.path.join(folder_path, filename)
            with open(file_path, 'r', encoding='utf-8') as f:
                try:
                    data = json.load(f)
                except json.JSONDecodeError as e:
                    print(f"Skipping {filename}: {e}")
                    continue

            if "name" in data and "localizedName" in data:
                data["localizedName"] = data["name"]
                with open(file_path, 'w', encoding='utf-8') as f:
                    json.dump(data, f, ensure_ascii=False, indent=4)
                print(f"Updated {filename}")
            else:
                print(f"No action for {filename}: missing 'name' or 'localizedName'")

if __name__ == "__main__":
    folder = "./" 
    replace_localized_name_with_name_in_folder(folder)