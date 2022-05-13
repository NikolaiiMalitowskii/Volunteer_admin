import {RidesStyled} from "./RidesStyled";
import {useDispatch, useSelector} from "react-redux";
import {ridesErrorSelector, ridesFilterSelector, ridesListSelector} from "../../redux/rides/ridesSelectors";
import UniversalPanel from "../universalPanel/UniversalPanel";
import {createRide, setRidesError, setRidesFilter} from "../../redux/rides/ridesActions";
import {useEffect} from "react";
import {getRidesListOperation} from "../../redux/rides/ridesOperations";
import {convertDateToISOString} from "../../helpers/times";
import {v4 as uuidv4} from 'uuid';

const Rides = () => {
    const dispatch = useDispatch();
    const ridesList = useSelector(ridesListSelector);
    const ridesFilter = useSelector(ridesFilterSelector);

    useEffect(()=> {
        !ridesList.length && dispatch(getRidesListOperation())
    }, [])
    return (
        <RidesStyled>
            <UniversalPanel
                title="Rides"
                titleIcon='users'
                headerButtons={[
                    {
                        icon: 'userPlus',
                        action: ()=> console.log('add ride')
                    }
                ]}
                newItem={{
                    headerText: "Create new ride",
                    headerIcon: 'userPlus',
                    fields: [
                        {
                            alias: 'departureSettlementId',
                            title: 'departureSettlementId',
                            type: 'text',
                            converter: (value)=> uuidv4(),
                        },
                        {
                            alias: 'arrivalSettlementId',
                            title: 'arrivalSettlementId',
                            type: 'text',
                            converter: (value)=> uuidv4(),
                        },
                        {
                            alias: 'estDepartureTime',
                            title: 'estDepartureTime',
                            type: 'datetime-local',
                            converter: convertDateToISOString
                        },
                        {
                            alias: 'estArrivalTime',
                            title: 'estArrivalTime',
                            type: 'datetime-local',
                            converter: convertDateToISOString
                        }
                    ],
                    error: {
                        getter: ridesErrorSelector,
                        setter: setRidesError
                    },
                    addItemOperation: createRide
                }}
                filter={{
                    getter: ridesFilter,
                    setter: setRidesFilter,

                }}
                items={{
                    array: ridesList,
                    schema: {
                        collectionName: 'rides',
                        title: 'ride',
                        icon: 'ride',
                    },

                }}
            />

        </RidesStyled>
    )
}

export default Rides;