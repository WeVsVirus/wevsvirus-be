package wirvsvirus.hack.stimmungsbarometer.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import wirvsvirus.hack.stimmungsbarometer.controller.model.Gender;
import wirvsvirus.hack.stimmungsbarometer.model.PersonResource;
import wirvsvirus.hack.stimmungsbarometer.service.RegistrationService;

import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class RegistrationControllerTest {

    @MockBean
    private RegistrationService registrationService;

    @BeforeEach
    void setup() {
        Mockito.reset(registrationService);
    }


    @Test
    @DisplayName("Register success")
    void register_success(@Autowired MockMvc mvc) throws Exception {
        String content = "{\n" +
                "    \"yearOfBirth\": \"1982\",\n" +
                "    \"gender\": \"NONE\",\n" +
                "    \"plz\": \"630\",\n" +
                "    \"householdSize\": 1,\n" +
                "    \"pet\": true,\n" +
                "    \"id\": \"vCJjZx9dkgMCgkyEDsWbab\"\n" +
                "}";
        mvc.perform(post("/register").contentType(MediaType.APPLICATION_JSON).content(content)).andExpect(
                status().isCreated()
        );
    }

    @Test
    @DisplayName("Register fails due to insufficient ZipCode")
    void register_ZipCodeTooShort(@Autowired MockMvc mvc) throws Exception {
        String content = "{\n" +
                "    \"yearOfBirth\": \"1982\",\n" +
                "    \"gender\": \"NONE\",\n" +
                "    \"plz\": \"6\",\n" +  // Zip must have three digits
                "    \"householdSize\": 1,\n" +
                "    \"pet\": true,\n" +
                "    \"id\": \"vCJjZx9dkgMCgkyEDsWbab\"\n" +
                "}";
        mvc.perform(post("/register").contentType(MediaType.APPLICATION_JSON).content(content)).andExpect(
                status().isBadRequest());
    }

    @Test
    @DisplayName("Register fails due to missing ID")
    void register_noId(@Autowired MockMvc mvc) throws Exception {
        String content = "{\n" +
                "    \"yearOfBirth\": \"1982\",\n" +
                "    \"gender\": \"NONE\",\n" +
                "    \"plz\": \"630\",\n" +
                "    \"householdSize\": 1,\n" +
                "    \"pet\": true\n" +
                "}";
        mvc.perform(post("/register").contentType(MediaType.APPLICATION_JSON).content(content)).andExpect(
                status().isBadRequest());
    }

    @Test
    @DisplayName("Registration success")
    void registration_success(@Autowired MockMvc mvc) throws Exception {
        String content = "{\n" +
                "    \"yearOfBirth\": \"1982\",\n" +
                "    \"gender\": \"NONE\",\n" +
                "    \"plz\": \"630\",\n" +
                "    \"householdSize\": 1,\n" +
                "    \"pet\": true,\n" +
                "    \"id\": \"vCJjZx9dkgMCgkyEDsWbab\"\n" +
                "}";
        mvc.perform(post("/register").contentType(MediaType.APPLICATION_JSON).content(content)).andExpect(
                status().isCreated()
        );
    }

    @Test
    @DisplayName("Registration fails due to insufficient ZipCode")
    void registration_zipCodeTooShort(@Autowired MockMvc mvc) throws Exception {
        String content = "{\n" +
                "    \"yearOfBirth\": \"1982\",\n" +
                "    \"gender\": \"NONE\",\n" +
                "    \"plz\": \"6\",\n" +  // Zip must have three digits
                "    \"householdSize\": 1,\n" +
                "    \"pet\": true,\n" +
                "    \"id\": \"vCJjZx9dkgMCgkyEDsWbab\"\n" +
                "}";
        mvc.perform(post("/register").contentType(MediaType.APPLICATION_JSON).content(content)).andExpect(
                status().isBadRequest());
    }

    @Test
    @DisplayName("Registration fails due to missing ID")
    void registration_noId(@Autowired MockMvc mvc) throws Exception {
        // Arrange
        String content = "{\n" +
                "    \"yearOfBirth\": \"1982\",\n" +
                "    \"gender\": \"NONE\",\n" +
                "    \"plz\": \"630\",\n" +
                "    \"householdSize\": 1,\n" +
                "    \"pet\": true\n" +
                "}";

        // Act
        mvc.perform(
                post("/register").contentType(MediaType.APPLICATION_JSON).content(content)
        )

                // Assert
                .andExpect(
                        status().isBadRequest()
                );
    }

    @Test
    @DisplayName("Retrieve Registration by ID and zip successfully")
    void userData_success(@Autowired MockMvc mvc) throws Exception {
        // Arrange
        PersonResource resource = PersonResource.builder().gender(Gender.MALE).id("abc").householdSize(3).pet(true).plz("123").yearOfBirth(1980).build();
        when(registrationService.getRegisteredUser("abc", "123")).thenReturn(resource);

        // Act
        mvc.perform(get("/registrations/{userId}", "abc").param("zip", "123"))

                // Assert
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.gender", is("MALE")))
                .andExpect(jsonPath("$.id", is("abc")))
                .andExpect(jsonPath("$.householdSize", is(3)))
                .andExpect(jsonPath("$.plz", is("123")))
                .andExpect(jsonPath("$.pet", is(true)))
                .andExpect(jsonPath("yearOfBirth", is(1980)));
    }

    @Test
    @DisplayName("No registration data found for id and zip")
    void userData_notFound(@Autowired MockMvc mvc) throws Exception {
        // Arrange
        when(registrationService.getRegisteredUser("abc", "123")).thenReturn(null);

        // Act
        mvc.perform(get("/registrations/{userId}", "abc").param("zip", "123"))

                // Assert
                .andExpect(status().isNotFound());
    }

    @Test
    @DisplayName("Get Userdata without zip")
    void userData_missingZip(@Autowired MockMvc mvc) throws Exception {
        // Arrange

        // Act
        mvc.perform(get("/registrations/{userId}", "abc"))

                // Assert
                .andExpect(status().isBadRequest());
    }

}
