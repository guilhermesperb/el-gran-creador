if [ -z "$1" ]; then
    echo "Missed argument Project Path"
    exit 1;
fi

cp -R ./output/controller $1
cp -R ./output/domain $1
cp -R ./output/factory $1
cp -R ./output/ports $1
cp -R ./output/repository $1
cp -R ./output/usecase $1