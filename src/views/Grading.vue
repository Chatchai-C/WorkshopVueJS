<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="6">
                <v-card class="pa-4">
                    <v-card-title class="text-center">
                        <h2>Grading</h2>
                    </v-card-title>

                    <v-card-text>
                        <v-text-field
                            :rules="[rules.score]"
                            name="score"
                            label="กรอกคะแนน (0-100)"
                            id="scoreInput"
                            v-model="score"
                            min="0"
                            max="100"
                            outlined
                            clearable
                        ></v-text-field>

                        <v-btn
                            @click="calculateGrade"
                            color="lightblue"
                            large
                            block
                            class="mt-3"
                            :disabled="rules.score(score) !== true"
                        >
                            <v-icon left>mdi-calculator</v-icon>
                            คำนวณเกรด
                        </v-btn>

                        <v-alert
                            v-if="grade"
                            :type="getAlertType(grade)"
                            class="mt-4"
                            prominent
                        >
                            <div class="text-center grade-result">
                                <h3>คะแนน: {{ score }}</h3>
                                <h2>เกรดที่ได้: {{ grade }}</h2>
                            </div>
                        </v-alert>

                        <v-card class="mt-4" outlined>
                            <v-card-title>เกณฑ์การตัดเกรด</v-card-title>
                            <v-card-text>
                                <div class="grade-info">
                                    <div class="grade-item">
                                        <v-chip
                                            color="green"
                                            text-color="white"
                                            small
                                            >A</v-chip
                                        >
                                        <span class="ml-2">80-100</span>
                                    </div>
                                    <div class="grade-item">
                                        <v-chip
                                            color="light-green"
                                            text-color="white"
                                            small
                                            >B</v-chip
                                        >
                                        <span class="ml-2">70-79</span>
                                    </div>
                                    <div class="grade-item">
                                        <v-chip
                                            color="orange"
                                            text-color="white"
                                            small
                                            >C</v-chip
                                        >
                                        <span class="ml-2">60-69</span>
                                    </div>
                                    <div class="grade-item">
                                        <v-chip
                                            color="deep-orange"
                                            text-color="white"
                                            small
                                            >D</v-chip
                                        >
                                        <span class="ml-2">50-59</span>
                                    </div>
                                    <div class="grade-item">
                                        <v-chip
                                            color="red"
                                            text-color="white"
                                            small
                                            >F</v-chip
                                        >
                                        <span class="ml-2">0-49</span>
                                    </div>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            score: "",
            grade: "",
        };
    },
    watch: {
        score() {
            this.grade = "";
        },
    },
    methods: {
        calculateGrade() {
            // Check if score is entered
            if (this.score === "" || this.score === null) {
                alert("กรุณากรอกคะแนน");
                return;
            }

            // Convert to number
            const numScore = parseFloat(this.score);

            // Check if it's a valid number
            if (isNaN(numScore)) {
                alert("กรุณากรอกตัวเลขเท่านั้น");
                return;
            }

            // Check score range
            if (numScore < 0 || numScore > 100) {
                alert("คะแนนต้องอยู่ในช่วง 0-100 เท่านั้น");
                return;
            }

            // Calculate grade
            if (numScore >= 80 && numScore <= 100) {
                this.grade = "A";
            } else if (numScore >= 70 && numScore <= 79) {
                this.grade = "B";
            } else if (numScore >= 60 && numScore <= 69) {
                this.grade = "C";
            } else if (numScore >= 50 && numScore <= 59) {
                this.grade = "D";
            } else if (numScore >= 0 && numScore <= 49) {
                this.grade = "F";
            }
        },

        getAlertType(grade) {
            const alertTypes = {
                A: "success",
                B: "info",
                C: "warning",
                D: "warning",
                F: "error",
            };
            return alertTypes[grade] || "info";
        },


    },
};
</script>

<script setup>
const rules = {
    score: (value) => {
        if (value === "" || value === null) return "กรุณากรอกคะแนน";
        if (!/^[0-9]*\.?[0-9]*$/.test(value) || value === ".")
            return "กรุณากรอกตัวเลขเท่านั้น";
        const num = parseFloat(value);
        if (isNaN(num)) return "กรุณากรอกตัวเลขเท่านั้น";
        if (num < 0) return "คะแนนต้องมากกว่าหรือเท่ากับ 0";
        if (num > 100) return "คะแนนต้องไม่เกิน 100";
        return true;
    },
};
</script>

<style>
.v-card {
    border-radius: 12px;
}

.v-alert {
    border-radius: 8px;
}

.v-chip {
    font-weight: bold;
}

h2,
h3 {
    color: #1976d2;
}

.grade-info {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: space-between;
}

.grade-item {
    display: flex;
    align-items: center;
    min-width: 80px;
}

@media (max-width: 600px) {
    .grade-info {
        flex-direction: column;
        gap: 8px;
    }
}

.grade-result h2,
.grade-result h3 {
    color: #ffffff;
    font-weight: bold;
}
</style>
