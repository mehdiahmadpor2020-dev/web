import { useEffect, useState } from 'react';
import { OBJECT_TYPE_CLOUD_TRACK, OBJECT_TYPE_FAVORITE, OBJECT_TYPE_WEATHER } from '../../../context/AppContext';
import { selectedForecastDetails } from '../../../menu/weather/Weather';

export default function useMenuDots(ctx) {
    const [menuDots, setMenuDots] = useState({});

    function setActiveMenu(type, value) {
        setMenuDots((prev) => ({ ...prev, [type]: value }));
    }

    useEffect(() => {
        setActiveMenu(OBJECT_TYPE_FAVORITE, ctx.openFavGroups?.length > 0 || ctx.selectedFavoriteObj);
    }, [ctx.openFavGroups, ctx.selectedFavoriteObj]);

    useEffect(() => {
        setActiveMenu(OBJECT_TYPE_CLOUD_TRACK, ctx.openGroups?.length > 0 || ctx.selectedCloudTrackObj);
    }, [ctx.openGroups, ctx.selectedCloudTrackObj]);

    function isSameHour() {
        const initial = new Date();
        const current = ctx.weatherDate;

        return (
            initial.getFullYear() === current.getFullYear() &&
            initial.getMonth() === current.getMonth() &&
            initial.getDate() === current.getDate() &&
            initial.getHours() === current.getHours()
        );
    }

    useEffect(() => {
        const showDetails = selectedForecastDetails(ctx);
        const openLayers = ctx.weatherLayers[ctx.weatherType]?.some((l) => l.checked);

        setActiveMenu(OBJECT_TYPE_WEATHER, !isSameHour() || showDetails || openLayers);
    }, [ctx.weatherDate, ctx.weatherLayers, ctx.weatherType]);

    return menuDots;
}
