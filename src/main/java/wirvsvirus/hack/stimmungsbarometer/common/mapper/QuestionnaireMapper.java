package wirvsvirus.hack.stimmungsbarometer.common.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import wirvsvirus.hack.stimmungsbarometer.model.QuestionnaireResponseResource;

@Mapper(componentModel = "spring")
public interface QuestionnaireMapper {

    @Mapping(target = "id", expression = "java( resource.getUserId() + resource.getResponseDate() )")
    QuestionnaireResponseResource fromControllerModelToServiceModel(wirvsvirus.hack.stimmungsbarometer.controller.model.QuestionnaireResponseResource resource);
}
