package com.team.web.estimate;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QEstimate is a Querydsl query type for Estimate
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QEstimate extends EntityPathBase<Estimate> {

    private static final long serialVersionUID = -1851919632L;

    public static final QEstimate estimate = new QEstimate("estimate");

    public final DatePath<java.time.LocalDate> movingDate = createDate("movingDate", java.time.LocalDate.class);

    public final StringPath movingFrom = createString("movingFrom");

    public final StringPath movingTo = createString("movingTo");

    public final StringPath movingType = createString("movingType");

    public final NumberPath<Integer> square = createNumber("square", Integer.class);

    public QEstimate(String variable) {
        super(Estimate.class, forVariable(variable));
    }

    public QEstimate(Path<? extends Estimate> path) {
        super(path.getType(), path.getMetadata());
    }

    public QEstimate(PathMetadata metadata) {
        super(Estimate.class, metadata);
    }

}

