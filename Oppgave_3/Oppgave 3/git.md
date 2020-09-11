git init
git remote add origin https://github.com/JoakimAa/Oppgave3.git
git checkout -b dev
echo "console.log(\"hiof\")" >> hiof.js
git add hiof.js
git commit -m "Added file"
git push origin dev
git pull origin dev
git merge dev

<!--After fixing merge conflict -->
git add .
git commit -m "Resolved merge conflict"