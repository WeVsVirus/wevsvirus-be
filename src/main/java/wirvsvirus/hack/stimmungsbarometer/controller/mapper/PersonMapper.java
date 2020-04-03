package wirvsvirus.hack.stimmungsbarometer.controller.mapper;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import wirvsvirus.hack.stimmungsbarometer.model.PersonResource;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface PersonMapper {

    PersonResource fromControllerModelToServiceModel(wirvsvirus.hack.stimmungsbarometer.controller.model.PersonResource controllerModel);
}
