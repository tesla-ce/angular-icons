ng build --prod @tesla-ce/icons
rm -rf src/assets/icons
cp -R dist/tesla-ce/icons/assets/icons src/assets/.
