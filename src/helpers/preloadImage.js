export default function preloadImage(url, callback) {
  let img = new window.Image();
  img.setAttribute("crossOrigin", "anonymous"); // see why this is necessary: https://goo.gl/FJD5vg
  img.src = url;
  img.onload = () => callback(img);
}
