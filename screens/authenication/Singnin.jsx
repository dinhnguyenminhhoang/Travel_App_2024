import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./Singnin.style";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS, SIZES } from "../../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HeightSpacer, ResuableBtn, WidthSpacer } from "../../components";

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "password must be at least 8 characters")
        .required("Required"),
    email: Yup.string().email("provide a valid email").required("Required"),
});

const Singnin = () => {
    const [loader, setLoader] = useState();
    const [resData, setResData] = useState(null);
    const [obsecureText, setObsecureText] = useState(false);

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(value) => {
                    console.log(value);
                }}
            >
                {({
                    handleChange,
                    touched,
                    handleSubmit,
                    values,
                    errors,
                    isValid,
                    setFieldTouched,
                }) => (
                    <View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>Email</Text>
                            <View>
                                <View
                                    style={styles.inputWrapper(
                                        touched.email
                                            ? COLORS.lightBlue
                                            : COLORS.gray
                                    )}
                                >
                                    <MaterialCommunityIcons
                                        name="email-outline"
                                        size={20}
                                        color={COLORS.gray}
                                    />
                                    <WidthSpacer width={10} />
                                    <TextInput
                                        placeholder="Enter email"
                                        onFocus={() => {
                                            setFieldTouched("email");
                                        }}
                                        onBlur={() => {
                                            setFieldTouched("email", "");
                                        }}
                                        value={values.email}
                                        onChangeText={handleChange("email")}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        style={{ flex: 1 }}
                                    />
                                </View>
                                {touched.email && errors.email && (
                                    <Text style={styles.errMessage}>
                                        {errors.email}
                                    </Text>
                                )}
                            </View>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>password</Text>
                            <View>
                                <View
                                    style={styles.inputWrapper(
                                        touched.password
                                            ? COLORS.lightBlue
                                            : COLORS.gray
                                    )}
                                >
                                    <MaterialCommunityIcons
                                        name="lock-outline"
                                        size={20}
                                        color={COLORS.gray}
                                    />
                                    <WidthSpacer width={10} />
                                    <TextInput
                                        secureTextEntry={obsecureText}
                                        placeholder="Enter password"
                                        onFocus={() => {
                                            setFieldTouched("password");
                                        }}
                                        onBlur={() => {
                                            setFieldTouched("password", "");
                                        }}
                                        onChangeText={handleChange("password")}
                                        value={values.password}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        style={{ flex: 1 }}
                                    />
                                    <TouchableOpacity
                                        onPress={() => {
                                            setObsecureText(!obsecureText);
                                        }}
                                    >
                                        <MaterialCommunityIcons
                                            name={
                                                obsecureText
                                                    ? "eye-outline"
                                                    : "eye-off-outline"
                                            }
                                            size={18}
                                        />
                                    </TouchableOpacity>
                                </View>
                                {touched.password && errors.password && (
                                    <Text style={styles.errMessage}>
                                        {errors.password}
                                    </Text>
                                )}
                            </View>
                        </View>
                        <HeightSpacer height={20} />
                        <ResuableBtn
                            onPress={handleSubmit}
                            text={"SING IN"}
                            width={SIZES.width - 40}
                            bgColor={COLORS.green}
                            borderColor={COLORS.green}
                            borderWidth={0}
                            textColor={COLORS.white}
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default Singnin;
