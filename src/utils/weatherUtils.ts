export const checkUVIndex = (uv: number): string => {
    if (uv < 3) {
        return 'The UV Index in your destination is low. Maybe think about choosing a different destination?';
    } else if ((uv >= 3) && (uv < 6)) {
        return 'The UV Index in your destination is moderate. You might think about wearing a cap.';
    } else if (uv < 11) {
        return "The UV Index in your destination is high. Don't forget to put on sunscreen.";
    }
    return 'The UV Index in your destination is extreme. Please, wear sun-protective clothing and be careful.';
};