import Image from '../model/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      //TODO: Variáveis ambiente
      url: `http://192.168.24.123:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
