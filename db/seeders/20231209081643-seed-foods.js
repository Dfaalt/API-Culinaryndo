'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      "Foods",
      [
        {
          image: "https://storage.googleapis.com/culinaryndo/gambar%20makanan/soto.jpg",
          title: "Soto",
          description: "Soto comes from Indonesia, specifically from the north coast of Java. This dish has been around since the 19th century, and is thought to originate from a soup dish brought by Chinese traders to Java. Soto is usually made from chicken, beef or goat stock mixed with various vegetables, such as vermicelli, bean sprouts, cabbage and spring onions.",
          latitude: "-6.994440891655246",
          longitude: "110.43240411009688",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: "https://storage.googleapis.com/culinaryndo/gambar%20makanan/sate-ayam.jpg",
          title: "Sate",
          description: "Sate comes from Indonesia, specifically from Ponorogo, East Java. This dish has been around since the 15th century, and is thought to have originated from a kebab dish brought by Arab traders to Java which was made from meat cut into small pieces and skewered in such a way with coconut leaf or bamboo bone sticks, then grilled using charcoal embers. wood. Satay is served with various kinds of spices depending on the variation of satay recipe.",
          latitude: "-7.798270525687068",
          longitude: "110.40221150785578",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: "https://storage.googleapis.com/culinaryndo/gambar%20makanan/rendang.jpg",
          title: "Rendang",
          description: "Rendang is a typical Minangkabau dish, West Sumatra made from beef cooked with coconut milk and spices. Rendang has a rich and savory taste, with a tender meat texture and a deep black color.",
          latitude: "-7.7634481",
          longitude: "110.3837337",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: "https://storage.googleapis.com/culinaryndo/gambar%20makanan/rawon.jpg",
          title: "Rawon",
          description: "Rawon is a typical Indonesian soup dish originating from East Java, especially the Surabaya and Malang areas. Rawon is made from beef stock cooked with kluwek, resulting in a dark black sauce. Rawon is usually served with thinly sliced beef, bean sprouts, spring onions and white rice.",
          latitude: "-7.974039990490596",
          longitude: "112.63836387902329",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: "https://storage.googleapis.com/culinaryndo/gambar%20makanan/pempek.jpg",
          title: "Pempek",
          description: "Pempek is a typical dish from Palembang, South Sumatra. Pempek is made from a mixture of sago flour, mackerel fish and spices. Pempek is usually served with cuko sauce made from brown sugar, tamarind and cayenne pepper.",
          latitude: "-2.9559062615940337",
          longitude: "104.74747586503926",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: "https://storage.googleapis.com/culinaryndo/gambar%20makanan/nasi_goreng.jpg",
          title: "Nasi Goreng",
          description: "Nasi goreng is a popular Indonesian dish made from fried rice, typically served with kecap manis (sweet soy sauce), eggs, and vegetables. It is a dish that originated in the Indonesian archipelago, and is now popular throughout the world. The dish is made with rice, vegetables, meat, and spices, and is then fried until crispy. Nasi goreng can be served as a main course or as a side dish.",
          latitude: "-6.183341724018061",
          longitude: "106.82614875646496",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: "https://storage.googleapis.com/culinaryndo/gambar%20makanan/gudeg.jpg",
          title: "Gudeg",
          description: "Gudeg is a traditional Javanese dish from Yogyakarta and Central Java, Indonesia. It is made from young jackfruit simmered in coconut milk and palm sugar over many hours, and is typically served with steamed rice, chicken, and hard-boiled eggs. Gudeg is a popular dish in Javanese cuisine, and is often served at special occasions such as weddings and birthdays. It is also a popular street food, and can be found in many restaurants and food stalls throughout Yogyakarta and Central Java.",
          latitude: "-7.790986128735004",
          longitude: "110.36457603457332",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: "https://storage.googleapis.com/culinaryndo/gambar%20makanan/gado-gado.jpg",
          title: "Gado Gado",
          description: "Gado-gado is a traditional Indonesian salad made with a variety of vegetables, such as lettuce, cucumber, carrot, bean sprouts, and potatoes, served with a peanut sauce. It is a popular dish in Indonesia and can be found in many different regions of the country. Gado-gado is believed to have originated in Java, Indonesia, and is thought to have been influenced by a variety of cultures, including Chinese, Dutch, and Indian. The dish is typically served with lontong, which is a type of steamed rice cake. It can also be served with other side dishes, such as tempeh, tahu, and kerupuk. Gado-gado is typically served with lontong, which is a type of steamed rice cake. It can also be served with other side dishes, such as tempeh, tahu, and kerupuk. The peanut sauce is the key ingredient in gado-gado. It is made with peanuts, chili peppers, garlic, and other spices. The sauce is typically served warm or cold. Gado-gado is a delicious and nutritious dish that is perfect for a light lunch or dinner. It is also a popular dish at festivals and celebrations.",
          latitude: "-6.17744079467393",
          longitude: "106.81647051137107",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: "https://storage.googleapis.com/culinaryndo/gambar%20makanan/ayam_betutu.jpeg",
          title: "Bebek Betutu",
          description: "Bebek betutu is a traditional Indonesian dish that originated from Bali. It is made with a whole duck that has been marinated in a mixture of spices, including turmeric, shallots, garlic, ginger, chili peppers, and kaffir lime leaves. The duck is then wrapped in banana leaves and roasted over an open fire for several hours. The result is a duck that is tender, flavorful, and has a rich, smoky flavor. Bebek betutu is often served with rice, sambal, and other side dishes. It is a popular dish for special occasions, such as weddings and festivals.",
          latitude: "-6.237419244422858",
          longitude: "106.79440662934788",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image: "https://storage.googleapis.com/culinaryndo/gambar%20makanan/bakso.jpg",
          title: "Bakso",
          description: "Bakso is believed to have originated from China and was introduced to Indonesia by Chinese immigrants. The name bakso is derived from the Hokkien Chinese word bak-so which means minced meat. Bakso is typically made from minced beef, but it can also be made from other meats such as chicken, pork, or fish. The minced meat is mixed with tapioca flour, eggs, and spices to form a dough. The dough is then shaped into meatballs and boiled in a pot of broth. Bakso is typically served in a bowl of hot broth with other ingredients such as noodles, vegetables, and fried onions. It can also be served as a snack or appetizer. Bakso is a popular dish in Indonesia and can be found in many restaurants and food stalls. It is a delicious and affordable meal that is enjoyed by people of all ages.",
          latitude: "-7.778598810241295",
          longitude: "110.40242095089765",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Foods', null, {});
  }
};
