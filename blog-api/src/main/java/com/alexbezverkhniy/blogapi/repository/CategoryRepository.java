package com.alexbezverkhniy.blogapi.repository;

import com.alexbezverkhniy.blogapi.domain.Category;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the Category entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    @Query("select category from Category category where category.user.login = ?#{principal.username}")
    List<Category> findByUserIsCurrentUser();

}
