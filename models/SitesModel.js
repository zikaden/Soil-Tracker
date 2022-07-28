const { Schema, model } = require("mongoose");

const sitesSchema = new Schema({
    //Generall Information      
    titleInformation: {
        siteName: {
            type: String,
        },
        projectNumber: String,

        profilNumber: String,
        date: { type: Date, default: Date.now },
        operator: String,

        geolocation: {
            latitude: Number,
            longitude: Number
        },
        elevation: String,
        pulpingprocess: String,
        keywords: String,
    },
    //Site Information
    siteInformation: {
        relief: [{
            slope: String,
            exposition: String,
            formType: String,
            microRelief: String,
            position: String,
        }],
        soilLoss: String,
        landUse: String,
        vegetationCover: String,
        weatheringInfluences: String,
        anthropogenicInfluences: String,
        groundOrganism: String,
        notes: String
    },
    //Horizontal Data
    horizontalData: {
        horizontBorders: [{
            boundary: String,
            positionDefinition: String,
        }],
        symbol: String,
        color: String,
        humusContent: String,
        pedogenCharacteristics: [{
            hydromorphy: [{
                oxidative: String,
                reductive: String,
            }],
            soilHumidity: String,
            consistency: String,
            otherPedogenicCharacteristics: String,
            soilStructure: [{
                formSize: String,
                bearingTypes: String,
            }],
            cavities: [{
                cracks: String,
                pores: String,
                coridoresPipes: String,
            }]
        }],
        bulkdensity: String,
        rootPenetrationIntensity: [{
            fineRootSystem: String,
            thickRootSystem: String,
        }],
        substrateType: String,
        substratGenesis: String,
        substrateCompositionCharacteristics: [{
            soilTypeClassification: [{
                soilType: String,
                relations: [{
                    shareClass: String,
                    sumInPercent: Number,
                }],
                carbonContent: String,
                carbonateContent: String,
            }],
            rockIdentification: [{
                parentMaterial: String,
                periglacialLevels: String,
                parentMaterialComponents: String,
            }],
        }],
        stratigraphy: String,
        Notes: String,
    },
    //Profile Information
    soilFormation: {
        soilSystemUnit: [{
            subType: String,
            varity: String,
            subvarity: String
        }],
        substrateSystemUnitt: [{
            calss: String,
            type: String,
            subtype: String
        }],
        humusForm: String,
        waterLevel: String,
        moistureLevel: String,
        erosionLevel: String,
        soilEstimates: String,
        notes: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}
);


const Sites = model("Sites", sitesSchema);

module.exports = Sites;
