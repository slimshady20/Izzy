package com.team.web.category;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QCategory is a Querydsl query type for Category
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QCategory extends EntityPathBase<Category> {

    private static final long serialVersionUID = -990092368L;

    public static final QCategory category = new QCategory("category");

    public final StringPath adminId = createString("adminId");

    public final StringPath contents = createString("contents");

    public final StringPath image = createString("image");

    public final NumberPath<Long> keySeq = createNumber("keySeq", Long.class);

    public final StringPath title = createString("title");

    public final StringPath writer = createString("writer");

    public QCategory(String variable) {
        super(Category.class, forVariable(variable));
    }

    public QCategory(Path<? extends Category> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCategory(PathMetadata metadata) {
        super(Category.class, metadata);
    }

}

