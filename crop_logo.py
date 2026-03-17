from PIL import Image
import sys

def crop_transparent(filename):
    try:
        img = Image.open(filename)
        bbox = img.getbbox()
        if bbox:
            print(f"Cropping {filename} to bbox {bbox}")
            img_cropped = img.crop(bbox)
            img_cropped.save(filename)
        else:
            print(f"Image {filename} is completely transparent or couldn't compute bbox.")
    except Exception as e:
        print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    crop_transparent('images/logo.png')
    crop_transparent('images/logo_wh.png')
