package wirvsvirus.hack.stimmungsbarometer.common.mapper;

import org.mapstruct.Mapper;
import wirvsvirus.hack.stimmungsbarometer.controller.model.RegistrationResource;
import wirvsvirus.hack.stimmungsbarometer.model.PersonResource;

@Mapper(componentModel = "spring")
public interface PersonMapper {

    PersonResource fromControllerModelToServiceModel(
            RegistrationResource controllerModel);

    RegistrationResource fromServiceModelToControllerModel(
            PersonResource serviceModel);

}
