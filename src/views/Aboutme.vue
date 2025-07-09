<template>
  <div class="aboutme-background">
      <!-- Realistic Bubble decorations -->
      <div
          v-for="(image, idx) in galleryImages.slice(0, 6)"
          :key="'bubble-img-' + idx"
          :class="'bubble bubble-img bubble-img-' + idx"
      >
          <!-- Inner bubble content -->
          <div
              class="bubble-inner"
              :style="{ backgroundImage: 'url(' + image.src + ')' }"
          ></div>
          <!-- Bubble highlight -->
          <div class="bubble-highlight"></div>
      </div>

      <v-card class="mx-auto main-card" max-width="700">
          <v-container fluid>
              <v-row>
                  <v-col cols="4">
                      <v-card class="profile-card">
                          <v-img
                              src="@/assets/profile.jpg"
                              height="420px"
                              cover
                          ></v-img>
                      </v-card>
                  </v-col>

                  <v-col cols="8">
                      <v-row dense>
                          <v-col
                              cols="12"
                              v-for="card in cards"
                              :key="card.title"
                          >
                              <v-card class="info-card">
                                  <v-img
                                      v-if="card.src"
                                      :src="card.src"
                                      class="align-end"
                                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                      height="200px"
                                      cover
                                  >
                                      <v-card-title class="text-white">{{
                                          card.title
                                      }}</v-card-title>
                                  </v-img>

                                  <template v-else>
                                      <v-card-title class="main-title">
                                          {{ card.name }}
                                      </v-card-title>
                                      <v-card-subtitle class="subtitle">{{
                                          card.title
                                      }}</v-card-subtitle>
                                      <v-card-text>
                                          <div
                                              v-for="(
                                                  item, index
                                              ) in card.descriptionItems"
                                              :key="index"
                                              class="info-item"
                                          >
                                              <v-icon
                                                  small
                                                  color="primary"
                                                  class="info-icon"
                                                  >{{ item.icon }}</v-icon
                                              >
                                              <span class="info-label"
                                                  >{{ item.label }}:</span
                                              >
                                              <span class="info-value">{{ item.value }}</span>
                                          </div>
                                      </v-card-text>

                                      <!-- Contact Links inside Personal Information card -->
                                      <v-divider class="mx-4"></v-divider>
                                      <v-card-text>
                                          <div class="contact-header">
                                              <v-icon color="primary" class="mr-2">mdi-account-circle</v-icon>
                                              <span class="contact-title">Contact Me</span>
                                          </div>
                                          <v-row justify="center" class="contact-row">
                                              <v-col
                                                  cols="auto"
                                                  v-for="contact in contactLinks"
                                                  :key="contact.name"
                                              >
                                                  <v-btn
                                                      :href="contact.url"
                                                      target="_blank"
                                                      :color="contact.color"
                                                      icon
                                                      size="small"
                                                      class="contact-btn"
                                                      :title="contact.name"
                                                  >
                                                      <v-icon>{{
                                                          contact.icon
                                                      }}</v-icon>
                                                  </v-btn>
                                              </v-col>
                                          </v-row>
                                      </v-card-text>
                                  </template>
                              </v-card>
                          </v-col>
                      </v-row>
                  </v-col>
              </v-row>
          </v-container>
      </v-card>

      <!-- Interested In Section -->
      <v-card class="mx-auto mt-4 section-card" max-width="700">
          <v-card-title class="section-title">
              <v-icon class="section-icon">mdi-star-circle</v-icon>
              <span>Interested In</span>
          </v-card-title>
          <v-card-text>
              <v-row justify="center" class="pa-2">
                  <v-chip
                      v-for="(interest, index) in interestedIn"
                      :key="index"
                      class="interest-chip"
                      color="primary"
                      text-color="white"
                      pill
                      outlined
                  >
                      <v-icon left small class="chip-icon">{{
                          interest.icon
                      }}</v-icon>
                      {{ interest.label }}
                  </v-chip>
              </v-row>
          </v-card-text>
      </v-card>

      <!-- Game Section -->
      <v-card class="mx-auto mt-4 section-card" max-width="700">
          <v-card-title class="section-title">
              <v-icon class="section-icon">mdi-gamepad-variant</v-icon>
              <span>Game</span>
          </v-card-title>
          <v-card-text>
              <v-row justify="center" align="center">
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                      v-for="(game, index) in games"
                      :key="index"
                  >
                      <v-card class="game-card" elevation="4">
                          <v-img
                              :src="game.img"
                              height="150"
                              class="game-image"
                              cover
                          ></v-img>
                          <v-card-text class="game-title">
                              {{ game.name }}
                          </v-card-text>
                      </v-card>
                  </v-col>
              </v-row>
          </v-card-text>
      </v-card>
  </div>
</template>

<script>
export default {
  data() {
      return {
          cards: [
              {
                  name: "Chatchai Chankaew",
                  title: "Personal Information",
                  descriptionItems: [
                      {
                          icon: "mdi-account",
                          label: "Nickname",
                          value: "Jack",
                      },
                      { icon: "mdi-cake-variant", label: "Age", value: "22" },
                      {
                          icon: "mdi-home",
                          label: "Address",
                          value: "Yala, Thailand",
                      },
                      {
                          icon: "mdi-school",
                          label: "University",
                          value: "Prince of Songkla University",
                      },
                      {
                          icon: "mdi-book-open-variant",
                          label: "Major",
                          value: "Computer Engineering",
                      },
                      {
                          icon: "mdi-basketball",
                          label: "Hobbies",
                          value: "Reading, Gaming, Sleeping",
                      },
                      {
                          icon: "mdi-thumb-up",
                          label: "Likes",
                          value: "Technology, Song, Anime",
                      },
                      {
                          icon: "mdi-thumb-down",
                          label: "Dislikes",
                          value: "Hot weather",
                      },
                  ],
              },
          ],
          contactLinks: [
              {
                  name: "Facebook",
                  icon: "mdi-facebook",
                  url: "https://www.facebook.com/idkeowo/",
                  color: "blue-darken-2",
              },
              {
                  name: "GitHub",
                  icon: "mdi-github",
                  url: "https://github.com/Chatchai-C",
                  color: "grey-darken-3",
              },
              {
                  name: "LinkedIn",
                  icon: "mdi-linkedin",
                  url: "https://www.linkedin.com/in/chatchai-jankaew-4b27a1315/",
                  color: "blue-darken-3",
              },
              {
                  name: "Email",
                  icon: "mdi-email",
                  url: "mailto:chatchai.cjk@gmail.com",
                  color: "red-darken-2",
              },
          ],
          galleryImages: [
              {
                  src: require("@/assets/xiao.jpg"),
                  alt: "Xiao",
              },
              {
                  src: require("@/assets/cursor.jpg"),
                  alt: "Cursor",
              },
              {
                  src: require("@/assets/noa.webp"),
                  alt: "Noa",
              },
              {
                  src: require("@/assets/shizuku.webp"),
                  alt: "Shizuku",
              },
              {
                  src: require("@/assets/vscode.png"),
                  alt: "VScode",
              },
              {
                  src: require("@/assets/emilia.jpg"),
                  alt: "Emilia",
              },
          ],
          interestedIn: [
              { icon: "mdi-robot", label: "Artificial Intelligence" },
              { icon: "mdi-web", label: "Web Development" },
              { icon: "mdi-cloud", label: "Cloud Computing" },
              { icon: "mdi-finance", label: "Financial" },
          ],
          games: [
              {
                  name: "Genshin Impact",
                  img: require("@/assets/genshin.jpeg"),
              },
              {
                  name: "Valorant",
                  img: require("@/assets/valo.jpg"),
              },
              {
                  name: "Minecraft",
                  img: require("@/assets/mancraft.png"),
              },
              {
                  name: "Delta Force",
                  img: require("@/assets/delta.png"),
              },
              {
                  name: "Osu!",
                  img: require("@/assets/osu.png"),
              },
          ],
      };
  },
};
</script>

<style scoped>
.aboutme-background {
  background-image: url("@/assets/lake.webp");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

/* Keyframe animations */
@keyframes float {
  0%,
  100% {
      transform: translateY(0px);
  }
  50% {
      transform: translateY(-20px);
  }
}

@keyframes floatReverse {
  0%,
  100% {
      transform: translateY(0px);
  }
  50% {
      transform: translateY(20px);
  }
}

@keyframes drift {
  0% {
      transform: translateX(0px) translateY(0px);
  }
  25% {
      transform: translateX(10px) translateY(-15px);
  }
  50% {
      transform: translateX(-5px) translateY(-10px);
  }
  75% {
      transform: translateX(-10px) translateY(5px);
  }
  100% {
      transform: translateX(0px) translateY(0px);
  }
}

@keyframes shimmer {
  0% {
      opacity: 0.2;
      transform: rotate(0deg);
  }
  50% {
      opacity: 0.6;
      transform: rotate(180deg);
  }
  100% {
      opacity: 0.2;
      transform: rotate(360deg);
  }
}

.bubble {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  z-index: 1;
  pointer-events: none;

  /* Crystal clear water bubble with subtle blue tint */
  background: radial-gradient(
      circle at 30% 30%,
      rgba(135, 206, 235, 0.15) 0%,
      /* Very light sky blue center */ rgba(173, 216, 230, 0.1) 30%,
      /* Extremely light blue */ rgba(240, 248, 255, 0.08) 60%,
      /* Almost transparent light blue */ rgba(255, 255, 255, 0.05) 80%,
      /* Barely visible white */ transparent 100%
  );

  /* Ultra-thin transparent border */
  border: 1px solid rgba(135, 206, 235, 0.2);
  backdrop-filter: blur(4px);

  /* Very subtle shadow for water-like effect */
  box-shadow: 0 4px 20px rgba(30, 144, 255, 0.03),
      inset 0 1px 4px rgba(135, 206, 235, 0.1),
      inset 0 -1px 4px rgba(173, 216, 230, 0.05);

  transition: all 0.3s ease;
}

.bubble:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 24px rgba(30, 144, 255, 0.05),
      inset 0 1px 6px rgba(135, 206, 235, 0.15),
      inset 0 -1px 6px rgba(173, 216, 230, 0.08);
}

.bubble-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  opacity: 0.8;
  filter: blur(0px);
  z-index: 2;
}

.bubble-highlight {
  position: absolute;
  top: 15%;
  left: 20%;
  width: 40%;
  height: 40%;
  border-radius: 50%;
  background: radial-gradient(
      circle at 30% 30%,
      rgba(255, 255, 255, 0.6) 0%,
      /* Soft white center */ rgba(240, 248, 255, 0.3) 50%,
      /* Very light blue */ rgba(135, 206, 235, 0.1) 80%,
      /* Barely visible blue */ transparent 100%
  );
  animation: shimmer 3s ease-in-out infinite;
  z-index: 3;
}

/* Individual bubble animations */
.bubble-img-0 {
  left: 100px;
  top: 60px;
  animation: float 6s ease-in-out infinite;
  animation-delay: 0s;
}

.bubble-img-1 {
  left: 250px;
  top: 400px;
  animation: floatReverse 8s ease-in-out infinite,
      drift 10s ease-in-out infinite;
  animation-delay: 1s, 0.5s;
}

.bubble-img-2 {
  left: 36px;
  bottom: 80px;
  animation: float 7s ease-in-out infinite;
  animation-delay: 2s;
}

.bubble-img-3 {
  right: 100px;
  top: 100px;
  animation: drift 9s ease-in-out infinite,
      floatReverse 6s ease-in-out infinite;
  animation-delay: 0.5s, 1.5s;
}

.bubble-img-4 {
  right: 200px;
  bottom: 400px;
  animation: float 8s ease-in-out infinite;
  animation-delay: 3s;
}

.bubble-img-5 {
  right: 36px;
  bottom: 60px;
  animation: floatReverse 7s ease-in-out infinite,
      drift 8s ease-in-out infinite;
  animation-delay: 1.5s, 2.5s;
}

/* Enhanced Card Styles */
.v-card {
  transition: all 0.3s ease;
}

.v-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.main-card {
  border-radius: 32px;
  box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.2);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: 32px 24px 24px 24px;
  margin-bottom: 32px;
  transition: all 0.3s ease;
}

.main-card:hover {
  box-shadow: 0 20px 60px 0 rgba(31, 38, 135, 0.25);
  transform: translateY(-4px) scale(1.01);
}

.section-card {
  border-radius: 24px;
  box-shadow: 0 8px 24px 0 rgba(31, 38, 135, 0.12);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  padding: 24px 20px 20px 20px;
  margin-bottom: 24px;
  transition: all 0.3s ease;
}

.section-card:hover {
  box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.18);
  transform: translateY(-3px) scale(1.005);
}

/* Enhanced Typography */
.main-title {
  font-size: 1.8rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.5px !important;
  color: #2c3e50 !important;
  text-align: center;
  margin-bottom: 8px;
}

.subtitle {
  color: #607d8b !important;
  font-size: 1.2rem !important;
  font-weight: 500 !important;
  text-align: center;
  margin-bottom: 16px !important;
  letter-spacing: 0.3px;
}

.section-title {
  font-size: 1.6rem !important;
  font-weight: 600 !important;
  color: #2c3e50 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin-bottom: 8px !important;
}

.section-icon {
  margin-right: 12px !important;
  font-size: 1.8rem !important;
  color: #3498db !important;
}

/* Enhanced Info Items */
.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 8px 12px;
  border-radius: 12px;
  background: rgba(245, 250, 255, 0.6);
  transition: all 0.2s ease;
}

.info-item:hover {
  background: rgba(227, 242, 253, 0.8);
  transform: translateX(4px);
}

.info-icon {
  margin-right: 16px !important;
  font-size: 1.2rem !important;
  color: #3498db !important;
}

.info-label {
  font-weight: 600;
  color: #37474f;
  margin-right: 8px;
  min-width: 80px;
}

.info-value {
  color: #546e7a;
  font-weight: 500;
  flex: 1;
}

/* Enhanced Contact Section */
.contact-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.contact-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  letter-spacing: 0.3px;
}

.contact-row {
  margin-top: 8px;
}

.contact-btn {
  border-radius: 50% !important;
  box-shadow: 0 4px 12px rgba(31, 38, 135, 0.15) !important;
  background: #ffffff !important;
  margin: 0 4px !important;
  transition: all 0.3s ease !important;
}

.contact-btn:hover {
  box-shadow: 0 6px 20px rgba(31, 38, 135, 0.25) !important;
  transform: translateY(-2px) scale(1.1) !important;
}

/* Enhanced Interest Chips */
.interest-chip {
  font-size: 1.05rem !important;
  font-weight: 500 !important;
  border-radius: 20px !important;
  box-shadow: 0 3px 10px rgba(31, 38, 135, 0.12) !important;
  background: linear-gradient(135deg, #ecf0f1, #f8f9fa) !important;
  color: #2c3e50 !important;
  margin: 6px !important;
  padding: 8px 16px !important;
  transition: all 0.3s ease !important;
}

.interest-chip:hover {
  transform: translateY(-2px) scale(1.05) !important;
  box-shadow: 0 6px 20px rgba(31, 38, 135, 0.2) !important;
}

.chip-icon {
  margin-right: 8px !important;
  color: #3498db !important;
}

/* Enhanced Game Cards */
.game-card {
  border-radius: 20px !important;
  box-shadow: 0 6px 20px rgba(31, 38, 135, 0.15) !important;
  transition: all 0.3s ease !important;
  overflow: hidden !important;
  background: #ffffff !important;
}

.game-card:hover {
  transform: translateY(-4px) scale(1.03) !important;
  box-shadow: 0 12px 30px rgba(31, 38, 135, 0.25) !important;
}

.game-image {
  border-top-left-radius: 20px !important;
  border-top-right-radius: 20px !important;
  transition: transform 0.3s ease !important;
}

.game-card:hover .game-image {
  transform: scale(1.05) !important;
}

.game-title {
  text-align: center !important;
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  color: #2c3e50 !important;
  padding: 16px 12px !important;
  background: linear-gradient(135deg, #f8f9ff, #ffffff) !important;
  letter-spacing: 0.3px !important;
}

.profile-card {
  border-radius: 20px !important;
  overflow: hidden !important;
  box-shadow: 0 8px 24px rgba(31, 38, 135, 0.15) !important;
  transition: all 0.3s ease !important;
}

.profile-card:hover {
  transform: scale(1.02) !important;
  box-shadow: 0 12px 32px rgba(31, 38, 135, 0.2) !important;
}

.info-card {
  border-radius: 16px !important;
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(8px) !important;
  box-shadow: 0 4px 16px rgba(31, 38, 135, 0.1) !important;
}

@media (max-width: 1600px) {
  .bubble-img {
      display: none !important;
  }
}

@media (max-width: 768px) {
  .main-title {
      font-size: 1.5rem !important;
  }
  
  .section-title {
      font-size: 1.4rem !important;
  }
  
  .info-item {
      flex-direction: column;
      align-items: flex-start;
  }
  
  .info-label {
      min-width: auto;
      margin-bottom: 4px;
  }
}
</style>