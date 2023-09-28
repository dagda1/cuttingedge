# @cutting/cloudinary-blurhash

Cloudinary BlurHash will generate a JSON file mappig your Cloudinary images, with their blurhash equivalent.

e.g.

```JSON
[
  {
    "id": "image_hash.png",
    "url": "https://res.cloudinary.com/ddospxsc8/image/upload/v11/image_hash.png",
    "blurhash": "U25Y1#_4xT-;NO-=?a%MV?j[o#WB?EW9ItM{",
    "width": 600,
    "height": 404
  },
```

## Usage

### Declare the `CLOUDINARY_URL` environment variable that takes this format.

```shell
export CLOUDINARY_URL=cloudinary://<API_KEY>:<CLOUDINARY_API_SECRET>@<CLOUDINARY_CLOUD_NAME>
```

### Run

```shell
npx @cutting/cloudinary-blurhash
```

### Switches

- `-f` or `--file`, the file name and path to the JSON output. Default is `<CWD>/blurhash_image_map.json`

e.g.

```shell
npx @cutting/cloudinary-blurhash -f ./app/json/blurhash_image_map.json
```

This package creates a [bin script](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) that can be executed like this:

```shell
npx @cutting/cloudinary-blurhash
```

Your console should look something like this:

![cloudinary-blurhash cli](https://res.cloudinary.com/ddospxsc8/image/upload/v1695819802/blurhash-cli_ueur9k.png)
