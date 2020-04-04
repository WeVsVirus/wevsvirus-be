package wirvsvirus.hack.stimmungsbarometer.common.mapper;

import org.mapstruct.Mapper;
import wirvsvirus.hack.stimmungsbarometer.model.PersonResource;

@Mapper(componentModel = "spring")
public interface PersonMapper {

    PersonResource fromControllerModelToServiceModel(wirvsvirus.hack.stimmungsbarometer.controller.model.PersonResource controllerModel);
}
