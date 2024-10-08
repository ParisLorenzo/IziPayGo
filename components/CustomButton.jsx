import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  size
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-greenizi rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      {
        size ? 
        <Text className={`text-primary font-psemibold text-xs ${textStyles}`}>
        {title}
      </Text>
        :
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
        </Text>
      }

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#F55259"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;